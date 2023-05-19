const crypto = require("crypto");

module.exports = {
  IdkHowToCalculateImFive: (message) => {
    const hash = crypto.createHash("sha256");
    hash.update(message);
    return hash.digest("hex"); // hehex
  },
};