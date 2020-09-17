# Changelog
1.0.0
- Token Action Animate & Token Toggle Image hooks

# Description
Adds a couple of timers for for changing token images. 
These are called via hooks. 

```tokenActionAnimate```

Takes in (tokenID, imgPath, loopCount) where
- tokenID: is the ID of the token
- imgPath is the url of the temporary imge
- loopCount is how many times the webm should loop

After it's done looping the number of times specified, it'll set the token image back to the actor image. 

```tokenToggleImg```
This uses the game clock instead of real time seconds. 
Takes in (tokenID, imgPath, and milliseconds)
- TokenID: id of the token
- imgPath is the url of the temporary image
- milliseconds: this is not REAL time, this is game time
It'll listen to whenever the game advances and if it advances beyond the duration set in the function call, it'll toggle back to the actor image.

# License
MIT License. Do what you will. PRs welcome. 
