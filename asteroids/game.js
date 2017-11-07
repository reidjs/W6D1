const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 20;
const Asteroid = require('./asteroid.js');

// setInterval(game_view(), 1000);


const Game = function Game(){
  this.asteroids = [];
  this.dim_x = DIM_X;
  this.dim_y = DIM_Y;
};

Game.prototype.addAsteroids = function addAsteroids() {
  let a = new Asteroid({pos: [110, 320], vel: [10,10]});
  this.asteroids.push(a);
};

Game.prototype.moveObjects = function moveObjects() {
  this.asteroids.forEach(function(asteroid) {
    asteroid.move();
  });
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });


};

const game = new Game;
game.addAsteroids();


module.exports = game;
