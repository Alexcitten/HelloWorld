module.exports = {
    shufleArraray: (array) => {
      return new Promise((resolve, reject) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        resolve(array);
      });
    },
  }; // What a save!