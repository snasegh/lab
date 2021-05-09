const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperVillain = supervillains.random();
var mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);
console.log(mySuperVillain);