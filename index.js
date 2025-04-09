let inputDir = { x: 0, y: 0 };
let snakeArr = [{x:13,y:15}]
let lasttime = 0;
 let board = document.querySelector(".board");
let speed = 50;
let foodi = { x: 6, y: 5 };
let score = 0;

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lasttime) / 1000 < 1 / speed) {
    return;
  }
  lasttime = ctime
  gameEngine();
}


function isCollide(snakeArr){
  for(i =1;i<snakeArr.length;i++){
    if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y){
      return true;
    }
  }
  if(snakeArr[0].x >= 18 || snakeArr[0].x <= 0 && snakeArr[0].y >= 18 || snakeArr[0].y <= 0){
    return true;
  }
}
function gameEngine() {

 if(isCollide(snakeArr)){
         inputDir = {};
         alert('Game over')
         snakeArr = [{x:0,y:0}]
         score = 0;
  }
  if(snakeArr[0].y === foodi.y && snakeArr[0].x === foodi.x){
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y});
    foodi = {x: 2 + Math.floor(Math.random() * 16),y: 2 +  Math.floor(Math.random() * 16),}
  } 

    for (let i = snakeArr.length - 2; i>=0; i--) { 
      snakeArr[i+1] = {...snakeArr[i]};
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;
  
    
    
 

  board.innerHTML = " ";
  snakeArr.forEach((e, index) => {
    snake = document.createElement("div");
    snake.style.gridColumnStart = e.x;
    snake.style.gridRowStart = e.y;
    snake.classList.add("snake");
    if (index === 0) {
      snake.classList.add("head");
   }
    board.appendChild(snake);
  });

  food = document.createElement("div");
  food.style.gridColumnStart = foodi.x;
  food.style.gridRowStart = foodi.y;
  food.classList.add("food");

  board.appendChild(food);
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 };
  switch (e.key) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;
      break;

  
  }
  
 
});
