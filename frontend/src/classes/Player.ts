export default class Player {
  public location?: UserLocation;

  private readonly _id: string;

  private readonly _userName: string;

  public mapID?: CoveyTownMapID;

  public sprite?: Phaser.GameObjects.Sprite;

  public label?: Phaser.GameObjects.Text;

  constructor(id: string, userName: string, location: UserLocation, mapID: CoveyTownMapID) {
    this._id = id;
    this._userName = userName;
    this.location = location;
    this.mapID = mapID;
  }

  get userName(): string {
    return this._userName;
  }

  get id(): string {
    return this._id;
  }

  static fromServerPlayer(playerFromServer: ServerPlayer): Player {
    return new Player(playerFromServer._id, playerFromServer._userName, playerFromServer.location, playerFromServer.mapID);
  }
}

export type ServerPlayer = { _id: string, _userName: string, location: UserLocation, mapID: CoveyTownMapID };

export type Direction = 'front'|'back'|'left'|'right';

export type UserLocation = {
  x: number,
  y: number,
  rotation: Direction,
  moving: boolean
};

// Used to represent super and sub map
// 0 = super map
// 1 = sub map
export type CoveyTownMapID = '0' | '1';
