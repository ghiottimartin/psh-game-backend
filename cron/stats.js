const axios = require('axios');
const { Stat } = require('../db/config');
const { getRandomInt } = require('../utils/numbers');

/**
 * Finds and returns a random user with random data.
 * 
 * @returns Object
 */
const getRandomUser = async () => {

  var user = await axios.get('https://randomuser.me/api')
    .then(response => {
      const data = response.data;
      const results = data.results;
      return results[0];
    })
    .catch(error => {
      console.log('An error occurred while searching for the random user: ' + error);
    });
  
  return user;
}

/**
 * Creates and saves a stat of a random player.
 */
const insertStat = async () => {
  const user = await getRandomUser();
  const score = getRandomInt(0, 100);
  const nickname = user.login.username;
  const playerId = getRandomInt(1, 20);
  const profileImg = user.picture.medium;

  await Stat.create({
    playerId: playerId,
    nickname: nickname,
    profileImg: profileImg,
    score: score
  });
  console.log(`Stat of player ${nickname} created successfully`)
};

/**
 * Creates and saves stats of a randoms players, between 0 and 10 players.
 */
const insertStats = async () => {
  const players = getRandomInt(0, 10);
  for (var i = 0; i < players; i++) {
    await insertStat();
  }
}

exports.insertStats = insertStats;