import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import { CoveyTownMapID, UserLocation } from '../../classes/Player';
import Video from '../../classes/Video/Video';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import CoveySuperMapScene from './CoveySuperMapScene';
import CoveySubMapScene from './CoveySubMapScene';

function createMapScene(video: Video, emitMovement: (location: UserLocation) => void, 
                        emitMapChange: (map: CoveyTownMapID) => void, currentMapID: CoveyTownMapID) {

  if (currentMapID === '1') {
    return new CoveySubMapScene(video, emitMovement, emitMapChange, currentMapID)
  }
  return new CoveySuperMapScene(video, emitMovement, emitMapChange, currentMapID)
}

export default function WorldMap(): JSX.Element {
  const video = Video.instance();
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
          // Top down game, so no gravity
          gravity: { y: 0 },
        },
      },
    };

    const game = new Phaser.Game(config);
    if (video) {
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
  }, [video, emitMovement, emitMapChange, currentMapID]);

  const deepPlayers = JSON.stringify(players);
  useEffect(() => {
    gameScene?.updatePlayersLocations(players);
  }, [players, deepPlayers, gameScene, currentMapID]);

  return <div id="map-container"/>;
}
