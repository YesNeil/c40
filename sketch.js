var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Car1,Car2,Car3,Car4,trackImage,groundImage;

var form, player, game;

var cars, Car1, Car2, Car3, Car4;

function preload(){
trackImage = loadImage('images/track.jpg')
groundImage = loadImage('images/ground.png')
Car1 = loadImage('images/car1.png')
Car2 = loadImage('images/car2.png')
Car3 = loadImage('images/car3.png')
Car4 = loadImage('images/car4.png') 
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
  game.end();  
  }
}
