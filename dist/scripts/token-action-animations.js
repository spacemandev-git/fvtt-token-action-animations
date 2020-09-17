var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Hooks.on('tokenActionAnimate', (tokenID, imgPath, loopCount) => __awaiter(this, void 0, void 0, function* () {
    let token = canvas.tokens.get(tokenID);
    if (!token) {
        return;
    } //token ID doesn't exist
    let newImgTexture = yield loadTexture(imgPath);
    canvas.tokens.get(tokenID).update({ "img": imgPath });
    setTimeout(() => {
        console.log("Doing a thing");
        canvas.tokens.get(tokenID).update({ "img": token.actor.img });
    }, //@ts-ignore
    newImgTexture.baseTexture.resource.source.duration * 1000 * loopCount);
}));
Hooks.on('tokenToggleImg', (tokenID, imgPath, ms) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let token = canvas.tokens.get(tokenID);
        if (!token) {
            return;
        }
        let currTime = game.time.worldTime;
        canvas.tokens.get(tokenID).update({ "img": imgPath });
        Hooks.on("updateWorldTime", (worldTime, updateInterval) => {
            if (worldTime > (currTime + ms)) {
                canvas.tokens.get(tokenID).update({ "img": token.actor.img });
                resolve();
            }
        });
    }));
}));
