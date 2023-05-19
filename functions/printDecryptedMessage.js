module.exports = {
    AHAHAHAHAPython: (message, isValid) => {
      return new Promise((resolve, reject) => {
        if (isValid) {
          setTimeout(() => {
            console.log(message);
            resolve();
          }, 1000);
        } else {
          console.log("INVALLIIID SIGNATURE :SKULL:");
          resolve();
        }
      });
    },
  };