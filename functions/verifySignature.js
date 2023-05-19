const crypto = require("crypto");

module.exports = {
  WhyNot: (data, publicKey, signature) => {
    return new Promise((resolve, reject) => {
      const signatureVerification = crypto.createVerify("RSA-SHA256"); // RSAA SHA SHA SHAAAA
      signatureVerification.update(data);
      const isSignatureValid = signatureVerification.verify(
        publicKey,
        signature,
        "hex"
      );
      resolve(isSignatureValid);
    });
  },
};