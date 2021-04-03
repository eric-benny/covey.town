
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

  // updated preload with tilemaps specific to subMap tilesets
  preload() {
    this.load.image('tiles', '/assets/tilesets/pokemon_big.png');
    this.load.tilemapTiledJSON('map', '/assets/tilemaps/indoors.json');
    this.load.atlas('atlas', '/assets/atlas/atlas.png', '/assets/atlas/atlas.json');
  }

  // MD added transfer player function to handle trigger tile event
  transferPlayer() {
    // console.log("emitting map change to 0!")
    this.emitMapChange("0")
    // const updatedMap = this.getCurrentMapID()
    // console.log("current map: ", updatedMap)
    // emit movement to new map spawn point
    // emit 
  }

}

  /*
  Scenario: SuperMap player steps on to tile trigger player is now in subMap
  function needed to: validate that the player has entered the subMap tile

  Scenario: SuperMap player is now in the subMap, they want to leave, so they need to
  step onto the exit tile, which is the exit trigger
  function needed to: an exit trigger to set the map.id of hte player to == 0.
  then send this information back to the backend

  Scenario : SubMap player wants to exit the game from the subMap

  Scenario: we are at capacity for the map e.g. 100/100 players.  The 100th player
  is in the subMap.  If at capacity, is the player still allowed to enter new subMaps?

  Scenario: we are at capacity for the map e.g. 100/100 players.  The 100th player
  is in the subMap.  They want to exit the game from the subMap. Do we want to notify
  the SuperMap or an event listener that we are no longer at capacity?

  Scenario: SuperMap player needs a validation that they can video with
  another subMap player.
  function needed to: set the property that they can video each other
   */

