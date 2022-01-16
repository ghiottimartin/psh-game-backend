/**
 * Generates a random integer between min and max.
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Number
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
exports.getRandomInt = getRandomInt;