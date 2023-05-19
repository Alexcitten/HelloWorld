const crypto = require("crypto");
const confeg = {
  encryptionAlgorithm: "aes-256-cbc",
  secretMessage: "Hello World!",
  secretPassphrase: "SPINACH",
};

module.exports = {
  HackTheUniverse: (message, key, iv) => {
    return new Promise((resolve, reject) => {
      const encryptionCipher = crypto.createCipheriv(
        confeg.encryptionAlgorithm,
        key,
        iv
      );
      let encryptedMessage = encryptionCipher.update(message, "utf8", "hex"); // hehe.
      encryptedMessage += encryptionCipher.final("hex");
      resolve(encryptedMessage);
    });
  },
};