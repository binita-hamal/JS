// YOUR CODE BELOW

function makeGrid(col, rows) {
  let twoDArray = [];
  for (let i = 0; i < rows; i++) {
    let rowArray = [];
    for (let j = 0; j < col; j++) {
      rowArray.push(j+1);
    }
    twoDArray.push(rowArray);
  }
  return twoDArray;
}
console.log(makeGrid(3, 4));
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/
