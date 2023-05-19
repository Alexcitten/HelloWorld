const crypto = require("crypto");

module.exports = {
  signPetition: (data, privateKey) => {
    return new Promise((resolve, reject) => {
      const signature = crypto.createSign("RSA-SHA256");
      signature.update(data);
      const generatedSignature = signature.sign(privateKey, "hex"); // #ffffff
      resolve(generatedSignature);
    });
  },
};