module.exports = {
    randomizer: () => {
      return new Promise((resolve, reject) => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
          const random = Math.floor(Math.random() * 1000);
          numbers.push(random);
        }
        resolve(numbers.sort((a, b) => b - a)); // THAT'S LIKE A SENIOR TASK
      });
    },
  };