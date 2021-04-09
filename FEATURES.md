# Features

To interact with the newly implemented feature in Covey.Town, the user will first navigate to the main Covey.Town landing page as normal (our deployment can be accessed here: https://lucid-hopper-1f156f.netlify.app/). All of the existing functionality in Covey.Town remains unchanged (creating/updating/deleting towns, etc.) - the user can choose a username and create a town or join an existing town in the same way. The user stories defined in our project plan can be excercised as follows:



## User Story 1:

"As a user in Covey.Town’s main interface, I want a fixed number of submaps to be automatically generated when creating a new map so that they are accessible when creating a map or joining an existing map." 

### Acceptance Criteria

Ensure that the user is able to: 

- Automatically generate submaps upon creation of a new map 

- Access all generated submaps, which are public to all users in the supermap and private to users outside of the supermap 

### Feature Interaction

To fulfill this user story, simply create a new town as you normally would through the Covey.Town landing page. When the town is created, a submap will be automatically created within it, which is only accessible via the supermap (the outdoor overworld map). As such, this submap is not visible to anyone from the town list on the landing page, and can only be accessed by those that are in the town. In order to access the submap, which appears as a building with an "open" door (blue rectangle), simply walk through the door to be automatically transferred to the submap.

![Covey.Town Architecture](docs/doorway_outlined.png)


## User Story 2:

"As a user in a Covey.Town room’s main map, I need to be able to join a submap by walking up to the door."

### Acceptance Criteria

Ensure the user is able to: 

- Identify where submap entrances are by an identifying feature on buildings. 

- Walk around the map and up to a submap’s entrance. 

- Upon walking up to the door, the user is transferred to the submap. 

### Feature Interaction

To fulfill this user story, identify a building on the supermap which appears to have an open door (this will appear as a blue-ish rectangle, marked in the image above). Navigate your avatar across the map as normal and up to the door of this building. While facing the door, move the avatar forward and into the door space - the player will automatically be transferred to the submap. 

![Covey.Town Architecture](docs/door_enter.png)

![Covey.Town Architecture](docs/submap_plain.png)


## User Story 3:

"As a user in a submap, I need to be able to communicate with other users in the submap."

### Acceptance Criteria

Ensure the user is able to: 

- See video of all users in the submap, regardless of proximity. 

- Hear audio from all users in the submap, regardless of proximity. 

- Only be able to communicate with other users inside of the submap your avatar is in. 

### Feature Interaction

To fulfill this user story, simply enter the submap as described above. The user will automatically be connected to the video and audio feeds of all other users in the submap, regardless of proximity. If other users enter the submap that the user is currently in, the user will automatically be connected to their video and audio as well. Once in the submap, the user will not be able to see or interact with any users on the supermap. 

![Covey.Town Architecture](docs/submap_2people.png)

## User Story 4:

"As a user in a submap, I need to be able to leave a submap and rejoin the main map."

### Acceptance Criteria

Ensure the user is able to: 

- Walk to the exit of a submap. 

- Upon walking to the exit, the user is transferred back to the main map. 

- Revert to main map functionality where the user only sees video/audio for other users in close proximity. 

### Feature Interaction

To fulfill this user story, find the blue rectangle at the bottom of the submap. Navigate the player's avatar to this location and onto the blue rectangle. The user will automatically be transferred to the supermap, and the communication mode will be reverted back to proximity-based video/audio. 

![Covey.Town Architecture](docs/submap_door_outline.png)
![Covey.Town Architecture](docs/submap_door_enter.png)
![Covey.Town Architecture](docs/supermap_multiplayer.png)