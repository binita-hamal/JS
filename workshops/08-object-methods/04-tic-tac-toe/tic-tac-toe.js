// YOUR CODE BELOW

let ticTacToe={
    board:[[null,null,null],[null,null,null],[null,null,null]],
    move:function(char,row,col){
        if(!this.board[row][col]){
        this.board[row][col] = char; 
        return this.board;
    }
},
    clear:function(){
        return this.board= [[null,null,null],[null,null,null],[null,null,null]];
    }
}

