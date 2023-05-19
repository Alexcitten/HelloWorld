const crypto = require("crypto");
const confeg = {
  encryptionAlgorithm: "aes-256-cbc",
  secretMessage: "Hello World!",
  secretPassphrase: "SPINACH",
};

module.exports = {
  vzlomPopki: (encryptedData, key, iv) => {
    return new Promise((resolve, reject) => {
      const decryptionCipher = crypto.createDecipheriv(
        confeg.encryptionAlgorithm,
        key,
        iv
      );
      let decryptedMessage = decryptionCipher.update(
        encryptedData,
        "hex",
        "utf8"
      );
      decryptedMessage += decryptionCipher.final("utf8");  // FINAL?
      resolve(decryptedMessage);
    });
  },
};