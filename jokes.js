const fs = require("fs");

const jokes = fs.readFileSync(__dirname + "/jokes.csv", "utf8").split("\n");

const randomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex].split(',"')[1].slice(0, -1).split('""').join('"');
};

module.exports = {
  randomJoke,
};
