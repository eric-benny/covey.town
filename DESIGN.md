<!--RUBRIC DESIGN.MD
WHAT: DESIGN.md file contains a description of any substantive changes
to the existing Covey.Town codebase, and the architecture of your new code.
HOW: It uses CRC cards, or state diagrams or any of the other techniques
that help describe the structure.
Page requirement: max 4 pages.
-->

# Design
<!--Design Intro Outline
1.Intro to doc
2.quick overview of our design and motivation
    -what themes did we want:
        -make use of current functionality to our advantage
        -make our code/application extensible
3.quick explanation how we broke up our DESIGN.md doc
-->

# Front-end
<!--Front-end Outline (refer to Eric's doc inside our team folder 
CS5500 Group 41 > Deliverables > Design Notes.docx
1.App.tsx
1.1 State
1.2 Reducer
-->
## App.tsx
![src_app.uml](docs/src_App_4.8.21.png)

# Front-end: Super/Sub-map scene and WorldMap
<!-- Game Scene Outline
1. What we first saw when looking at WorldMap
2. How we imagined extensible design and created: CoveySuperMapScene and CoveySubMapScene
3. About WorldMap.tsx
4. About CoveySuperMapScene
5. About CoveySubMapScene
6. How we handled the scene changing between Super->Sub and Sub->Super
-->
### WorldMap.tsx
![worldFolder_4.8.21.png](docs/worldFolder_4.8.21.png)
### CoveySuperMapScene.ts
### CoveySubMapScene.ts

# State Changes
<!--State Changes Outline
1. Not sure if this is to be on it's own, OR will be discussed in the 
frontend:super/sub section.  Placed it here, since we discussed this section on Thurs.
Feel free to modify.
-->

# (Need a better title: Code updates from Professor)
<!--Need a better title: Code updates from Professor Outline
1.We need to somehow explain why we did not take certain code from 
Professor Bell's updated code, OR had to modify it.
2.We did not use transporter code.
    - we made changes to our code by the time we saw the transporter code update and had
    to comment the update to make sure it did not interact with our current feature
    we were building.
    - List any other reasoning
3.Sprite fix (in upper left) update
    - updated code from Professor used the same naming convention for a field we 
    already had in use.
    - So we can explain what we did.
-->

# For our Covey.Town v2 release: 
<!-- For our v2 Release Outline:
1. There were things that we had to intentionally leave for later
2. How did we handle issues outside of our use-cases?
    -We had a list in our meeting minutes and would have to 
    prioritize if those issues were optional vs. required.
    -Tried our best to prioritize the use cases as outlined in our plan
3. What would we do for the v2 release:
    -incorporate the transporter code.
    -spawn relocation for avatar from Submap->SuperMap, so it goes to entrance
    -(anything else)  
-->

# Conclusion
<!--Conclusion Outline
1.Outro
-->
