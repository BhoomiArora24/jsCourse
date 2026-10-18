const board = document.querySelector(".board");
const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

//so as we need to store the indexes we need to create a 2d array but by default js doesnor create 2d array
//therefore we'll create a 1D array overhere and will convert it into an 2d array in runtime
const blocks = [];

// for(let i = 0; i < rows*cols; i++){
//     const block = document.createElement('div');
//     block.classList.add("block");
//     board.appendChild(block);
// }

//FPS (Frame per second ) == ek second me frame kitna change hoga

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText= `${row},${col}`
    blocks[`${row} - ${col}`] = block;
  }
}
