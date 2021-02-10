var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();
  }
}

fruits(){
  if (World.frameCount%80===0){
  fruit=createSprite(600, 200, 20, 20);
  fruit.scale=0.2;
    r=Math.round(random(1, 4));
    if(r==1){
      fruit.addImage("fruit1",fruit1_img )
    } else if (r==2){
      fruit.addImage("fruit2", fruit2_img)
    } else if (r==3){
      fruit.addImage("fruit3", fruit3_img)       
    } else if (r==4){
        fruit.addImage("fruit4", fruit4_img)       
    }
    
   fruit.y=Math.round(random(50, 340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
  }
