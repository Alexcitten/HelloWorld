const crypto = require("crypto");

module.exports = {
  iWokeUpInANewBuggati: (passphrase, salt, keylen) => {
    return new Promise((resolve, reject) => {
      crypto.scrypt(passphrase, salt, keylen, (scryptError, key) => {
        if (scryptError) {
          console.error(
            "AAAAAAHHHHHHH ERROR BROOHHH generating key...sad..",
            scryptError
          );
          reject(scryptError);
          return;
        }
        resolve(key); // to find the discriminant of a quadratic equation, which can be made from the letters of the word "key", you should use the discriminant formula: Discriminant (D) = b^2 - 4ac, where a, b and c are the coefficients of the quadratic equation.
      });
    });
  },
};