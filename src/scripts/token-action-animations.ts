Hooks.on('tokenActionAnimate', async (tokenID:string, imgPath: string, loopCount: number) => {
  let token = canvas.tokens.get(tokenID);
  if(!token){return;} //token ID doesn't exist
  
  let newImgTexture = await loadTexture(imgPath);
  canvas.tokens.get(tokenID).update({"img": imgPath})
  
  setTimeout(() => {
    console.log("Doing a thing");
    canvas.tokens.get(tokenID).update({"img": token.actor.img})
  }, //@ts-ignore
  newImgTexture.baseTexture.resource.source.duration * 1000 * loopCount);  
})

Hooks.on('tokenToggleImg', async (tokenID: string, imgPath: string, ms:number) => {
  return new Promise(async (resolve, reject) => {
    let token = canvas.tokens.get(tokenID);
    if(!token){return;}
    let currTime:number = game.time.worldTime;
    canvas.tokens.get(tokenID).update({"img": imgPath})
    Hooks.on("updateWorldTime", (worldTime: number, updateInterval: number) => {
      if(worldTime > (currTime + ms)){
        canvas.tokens.get(tokenID).update({"img": token.actor.img})
        resolve();
      }
    })  
  })
})