import { Socket } from 'socket.io-client';
import Player, { UserLocation, CoveyTownMapID } from './classes/Player';
import TownsServiceClient from './classes/TownsServiceClient';

export type CoveyEvent = 'playerMoved' | 'playerAdded' | 'playerRemoved';

export type VideoRoom = {
  twilioID: string,
  id: string
};
export type UserProfile = {
  displayName: string,
  id: string
};
export type NearbyPlayers = {
  nearbyPlayers: Player[]
};
export type CoveyAppState = {
  sessionToken: string,
  userName: string,
  currentTownFriendlyName: string,
  currentTownID: string,
  currentTownIsPubliclyListed: boolean,
  myPlayerID: string,
  players: Player[],
  currentLocation: UserLocation,
  currentMapID: CoveyTownMapID,
  nearbyPlayers: NearbyPlayers,
  emitMovement: (location: UserLocation) => void,
  emitMapChange: (mapID: CoveyTownMapID) => void,
  socket: Socket | null,
  apiClient: TownsServiceClient,
};
