var hypnoticBall, database;
var position;
var gameState=0;
var playerCount;
var form, game, player;
var allPlayers, distance=0;

function setup(){
 createCanvas(500,500);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white"); 
}

