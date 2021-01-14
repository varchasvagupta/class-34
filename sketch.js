var ball;
var database;
var lball;
var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
  //ref() //reffers to the location of the node in the database
    lball=database.ref('ball/positions');
    //on() //reading x and y values for the location in database 
    lball.on ("value",readPosition);


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    //set is used to write values in the database
  database.ref('ball/positions').set ({
      'x':position.x + x,
      'y':position .y +y
  })
}

function readPosition(data){
  position =data.val ();       //var position={x:200,y:200}
  ball.x =position.x;  //200                                     
  ball.y=position.y;  //200
  
}