var  database;
var GameState =0;
var PlayerCount ;
var form,game,player;


function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){

  
    
    
  
}


 