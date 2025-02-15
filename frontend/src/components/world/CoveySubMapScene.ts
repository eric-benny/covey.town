import CoveySuperMapScene from "./CoveySuperMapScene";
import {CoveyTownMapID, UserLocation} from "../../classes/Player";
import Video from "../../classes/Video/Video";

/*
 This class defines the sub-map scene that is created when a user enters a building from the super-map. This class extends 
 CoveySuperMapScene (formerly CoveyGameScene) and includes properties and functionality specific to the sub-map. This
 includes the tilemap, which is set in the constructor, and the overridden preload and transferPlayer functions.
*/

export default class CoveySubMapScene extends CoveySuperMapScene {

  constructor(video: Video, emitMovement: (loc:UserLocation) => void, emitMapChange: (map: CoveyTownMapID) => void, mapID: string, myPlayerID: string) {
    super(video, emitMovement, emitMapChange, mapID, myPlayerID);
    this.tilemap = 'pokemon_big'
  }

  // Asset paths are updated to those specific to the sub-map scene
  preload(): void {
    this.load.image('tiles', '/assets/tilesets/pokemon_big.png');
    this.load.tilemapTiledJSON('map', '/assets/tilemaps/indoors.json');
    this.load.atlas('atlas', '/assets/atlas/atlas.png', '/assets/atlas/atlas.json');
  }

  // Emmitted value updated to transfer player to the super-map
  // MD added transfer x, y paramters to emit player movement to destination spawn point
  transferPlayer(transfer_x: number, transfer_y: number): void {
    this.emitMapChange('0')
    this.emitMovement({x: transfer_x, y: transfer_y, rotation: 'front', moving: false })
  }
}