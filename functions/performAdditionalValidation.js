const { additionalCringe } = require("./additionalProcessing");
const { shoEto } = require("./performTimeConsumingTask");

module.exports = {
  esheOdinCringe: (publicKey, privateKey) => {
    console.log("Performing additional validation... THAT'S IMPORTANT!!!");
    return new Promise((resolve, reject) => {
      const isValid = publicKey.length > 100 && privateKey.length > 100;
      if (!isValid) {
        console.log("Validation failed!!!!!!!!!1111");
        resolve();
      } else {
        shoEto();
        additionalCringe().then(resolve);
      }
    });
  },
};