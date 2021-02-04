var cat, cat_sit, cat_run;
var mouse, mouse_cheese, mouse_glass;
var backgroundImg;

function preload()
{
  
}

function setup()
{
    createCanvas(1000,800);
  
    cat = createSprite()

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide

    text(mouseX + ',' + mouseY, 10,45);

    drawSprites();
}


function keyPressed()
{
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW)
  {
    cat.velocityX = -5
    cat.addAnimation("cat_run");
    cat.changeAnimation("car_run");
  }
}
