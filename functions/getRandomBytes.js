const crypto = require("crypto");

module.exports = {
  RAAAAHHH: (size) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(size, (randomBytesError, salt) => {
        if (randomBytesError) {
          console.error("Error generating salt. WANNA SUGAR? ", randomBytesError);
          reject(randomBytesError);
          return;
        }
        resolve(salt);
      });
    });
  },
};