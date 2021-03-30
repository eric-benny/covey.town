import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import Player, { CoveyTownMapID, UserLocation } from '../../classes/Player';
import Video from '../../classes/Video/Video';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import CoveySuperMapScene from './CoveySuperMapScene';
import CoveySubMapScene from './CoveySubMapScene';

// MD added emitMapChange parameter to pass to scene constructor
function createMapScene(myPlayer: Player | undefined, video: Video, emitMovement: (location: UserLocation) => void, 
                        emitMapChange: (map: CoveyTownMapID) => void, playerID: string, currentMapID: CoveyTownMapID) {

  // MD updated map call logic
  if (currentMapID === '1') {
    return new CoveySubMapScene(video, emitMovement, emitMapChange, playerID)
  }
  return new CoveySuperMapScene(video, emitMovement, emitMapChange, playerID)
}

// MD extracted emitMapChange, mapID from state
export default function WorldMap(): JSX.Element {
  const video = Video.instance();
  const {
    emitMovement, players, myPlayerID, emitMapChange, currentMapID
  } = useCoveyAppState();

// get my player from player array
const myPlayer = players.find((player) => player.id === myPlayerID)

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
      const newGameScene = createMapScene(myPlayer, video, emitMovement, emitMapChange, myPlayerID, currentMapID);
      // const newGameScene = new CoveySuperMapScene(video, emitMovement);
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
  }, [video, emitMovement, myPlayer, myPlayerID, emitMapChange, currentMapID]); // myPlayer, myPlayerID, emitMapChange dependencies added by MD

  const deepPlayers = JSON.stringify(players);
  useEffect(() => {
    gameScene?.updatePlayersLocations(players);
  }, [players, deepPlayers, gameScene]);

  return <div id="map-container"/>;
}
