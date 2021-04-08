import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import { CoveyTownMapID, UserLocation } from '../../classes/Player';
import Video from '../../classes/Video/Video';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import CoveySuperMapScene from './CoveySuperMapScene';
import CoveySubMapScene from './CoveySubMapScene';

/*
 Note: CoveySuperMapScene (formerly CoveyGameScene) class definition has been moved to its own file
 (CoveySuperMapScene.ts) to avoid circular-dependency error caused by importing CoveySubMapScene 
 (which extends CoveySuperMapScene) into the same file where its super-class is defined. Both map 
 scene classes are imported above. 
*/

/*
 This function allows for the dynamic creation of the user's current map location. The function takes
 a video instance, emitMovement and emitMapChange functions, and the currentMapID as parameters and 
 passes them to the appropriate map scene constructor. The function returns the created map scene. 
*/
function createMapScene(video: Video, emitMovement: (location: UserLocation) => void, 
                        emitMapChange: (map: CoveyTownMapID) => void, currentMapID: CoveyTownMapID) {

  if (currentMapID === '1') {
    return new CoveySubMapScene(video, emitMovement, emitMapChange, currentMapID)
  }
  return new CoveySuperMapScene(video, emitMovement, emitMapChange, currentMapID)
}

export default function WorldMap(): JSX.Element {
  const video = Video.instance();
  // emitMapChange and currentMapID are now extracted from the App state
  const {
    emitMovement, players, emitMapChange, currentMapID
  } = useCoveyAppState();

  const [gameScene, setGameScene] = useState<CoveySuperMapScene>();
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'map-container',
      minWidth: 800,
      minHeight: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }, // Top down game, so no gravity
        },
      },
    };

    const game = new Phaser.Game(config);
    if (video) {
      // newGameScene variable now collects the appropriate game scene from the createMapScene 
      // function defined above
      const newGameScene = createMapScene(video, emitMovement, emitMapChange, currentMapID);
      setGameScene(newGameScene);
      game.scene.add('coveyBoard', newGameScene, true);
      video.pauseGame = () => {
        newGameScene.pause();
      }
      video.unPauseGame = () => {
        newGameScene.resume();
      }
    }
    return () => {
      game.destroy(true);
    };
    // emitMapChange and currentMapID added to dependency list
  }, [video, emitMovement, emitMapChange, currentMapID]); 

  const deepPlayers = JSON.stringify(players);
  useEffect(() => {
    gameScene?.updatePlayersLocations(players);
    // currentMapID added to dependency list so that updatePlayersLocations is called when the user
    // changes maps
  }, [players, deepPlayers, gameScene, currentMapID]);

  return <div id="map-container"/>;
}
