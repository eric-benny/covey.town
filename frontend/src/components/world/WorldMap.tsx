import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import Player, { UserLocation } from '../../classes/Player';
import Video from '../../classes/Video/Video';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import CoveySuperMapScene from './CoveySuperMapScene';
import CoveySubMapScene from './CoveySubMapScene';


function createMapScene(myPlayer: Player | undefined, video: Video, emitMovement: (location: UserLocation) => void, playerID: string) {

  if (myPlayer === undefined) {
    return new CoveySuperMapScene(video, emitMovement, playerID)
  }
  if (myPlayer.mapID !== '0') {
    return new CoveySubMapScene(video, emitMovement, playerID)
  }
  return new CoveySuperMapScene(video, emitMovement, playerID)
}

export default function WorldMap(): JSX.Element {
  const video = Video.instance();
  const {
    emitMovement, players, myPlayerID
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
      const newGameScene = createMapScene(myPlayer, video, emitMovement, myPlayerID);
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
  }, [video, emitMovement, myPlayer, myPlayerID]); // myPlayer and myPlayerID dependencies added by MD

  const deepPlayers = JSON.stringify(players);
  useEffect(() => {
    gameScene?.updatePlayersLocations(players);
  }, [players, deepPlayers, gameScene]);

  return <div id="map-container"/>;
}
