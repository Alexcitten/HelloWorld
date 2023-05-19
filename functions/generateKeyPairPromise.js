const crypto = require("crypto");

module.exports = {
  shizanutiyCode: (options) => {
    return new Promise((resolve, reject) => {
      crypto.generateKeyPair(
        "rsa",
        options,
        (generateKeyPairError, publicKey, privateKey) => {
          if (generateKeyPairError) {
            console.error("Errar generatinjg key pair........:", generateKeyPairError);
            reject(generateKeyPairError);
            return;
          }
          resolve({
            publicKey,
            privateKey,
          });
        }
      );
    });
  },
};