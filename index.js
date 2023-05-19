const { RAAAAHHH } = require("./functions/getRandomBytes");
const { iWokeUpInANewBuggati } = require("./functions/scryptPromise");
const { PUPOKBOBRA } = require("./functions/generateRandomIV");
const { IdkHowToCalculateImFive } = require("./functions/calculateDigest");
const { HackTheUniverse } = require("./functions/encryptMessage");
const { shizanutiyCode } = require("./functions/generateKeyPairPromise");
const { signPetition } = require("./functions/signData");
const { WhyNot } = require("./functions/verifySignature");
const { vzlomPopki } = require("./functions/decryptMessage");
const { AHAHAHAHAPython } = require("./functions/printDecryptedMessage");
const { randomizer } = require("./functions/generateRandomNumbers");
const { shufleArraray } = require("./functions/shuffleArray");
const { esheOdinCringe } = require("./functions/performAdditionalValidation");

const confeg = {
  encryptionAlgorithm: "aes-256-cbc",
  secretMessage: "Hello World!", // THAT'S HEELLOOO WORLD OMGGG
  secretPassphrase: "SPINACH", // spinach.
};

const main = async () => {
  try {
    const salt = await RAAAAHHH(16); // 16 because on August 16, 2017 I didn't get a spoonful of soup in my mouth so I write in JavaScript
    const key = await iWokeUpInANewBuggati(confeg.secretPassphrase, salt, 32); // That soup was not saltyIWOKEUPINANEWBUGGATTIII
    const iv = await PUPOKBOBRA(); // no questions.
    const encryptedMessage = await HackTheUniverse(
      confeg.secretMessage,
      key,
      iv
    );
    const digest = IdkHowToCalculateImFive(encryptedMessage);
    const keyPair = await shizanutiyCode({
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });
    const generatedCucumber = await signPetition(digest, keyPair.privateKey);// why not?
    const KakoyToCringe = `${encryptedMessage}:${salt.toString("hex")}:${iv.toString("hex")}:${generatedCucumber};`;
    const [encryptedData, saltData, ivData, signatureData] = KakoyToCringe.split(":");
    const isSignatureValid = await WhyNot(
      digest,
      keyPair.publicKey,
      signatureData
    );
    const decryptedMessage = await vzlomPopki(
      encryptedData,
      key,
      Buffer.from(ivData, "hex")
    );
    await esheOdinCringe(keyPair.publicKey, keyPair.privateKey);
    await AHAHAHAHAPython(decryptedMessage, isSignatureValid);
  } catch (error) {
    console.error("bro an error occurred:", error);
  }
};

const FINALLY = async () => {
  console.log("Performing VERY complex calculations...");
  const randamNumbers = await randomizer(); // aron don don
  const shafffledNumbers = await shufleArraray(randamNumbers);
  const filturedNambers = shafffledNumbers.filter((num) => num % 2 === 0);
  const sum = filturedNambers.reduce((total, num) => total + num, 0);
  const isEven = sum % 2 === 0;
  if (isEven) {
    await main();
  } else {
    console.log("Sorry, the sum of the filtered numbers is odd. WHY.");
  }
};

FINALLY();