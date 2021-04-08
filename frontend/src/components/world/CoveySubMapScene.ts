
import CoveySuperMapScene from "./CoveySuperMapScene";
import {CoveyTownMapID, UserLocation} from "../../classes/Player";
import Video from "../../classes/Video/Video";

export default class CoveySubMapScene extends CoveySuperMapScene {
  // class types are inferred from their assignments in the constructor

  // constructor takes values from CoveySuperMapScene can include additional properties above
  // and parameters if needed.
  constructor(video: Video, emitMovement: (loc:UserLocation) => void, emitMapChange: (map: CoveyTownMapID) => void, mapID: string) {
    super(video, emitMovement, emitMapChange, mapID);
    this.tilemap = 'pokemon_big'
  }

  preload(): void {
    this.load.image('tiles', '/assets/tilesets/pokemon_big.png');
    this.load.tilemapTiledJSON('map', '/assets/tilemaps/indoors.json');
    this.load.atlas('atlas', '/assets/atlas/atlas.png', '/assets/atlas/atlas.json');
  }

  transferPlayer(): void {
    this.emitMapChange("0")
  }

}