//Create variables here
var dog, happyDog;

var database;

var foodS, foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {
  background(46,139,87);  

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  strokeWeight();
  fill("white");

  text("Food Remaining: " + foodS, 190,50);
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0) {
    x=0;
  }
  else {
    x=x-1;
  }

  database.ref('/').update( {
    Food:x
  })
}