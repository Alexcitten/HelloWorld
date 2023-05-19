module.exports = {
    additionalCringe: () => {
      console.log("Performing additional processing...");
      console.log("Just a second.....")
      return new Promise((resolve, reject) => {
        resolve(); // just resolve.
      });
    },
  };