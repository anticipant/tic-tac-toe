class TicTacToe {
  constructor() {
    this.PlayerSymbol="x";
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

  }

  getCurrentPlayerSymbol() {
    return this.PlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) { 
    if(this.matrix[rowIndex][columnIndex] === null) { 
      this.matrix[rowIndex][columnIndex] = this.PlayerSymbol; 
      if(this.PlayerSymbol === 'x') { 
        this.PlayerSymbol = 'o' 
      } else { 
        this.PlayerSymbol = 'x';
      } 
    } 
  } 

  isFinished() { 
    if ((this.getWinner() === "x") || (this.getWinner() === "o") || (this.noMoreTurns())) { 
      return true 
    } else { 
      return false 
    } 
  } 
  getWinner() { 
    var field = this.matrix; 
    if (field[0][0]+field[0][1]+field[0][2] === 'xxx') return 'x'; // 1 gor
    if (field[1][0]+field[1][1]+field[1][2] === 'xxx') return 'x'; // 2 gor
    if (field[2][0]+field[2][1]+field[2][2] === 'xxx') return 'x'; // 3 gor
    if (field[0][0]+field[1][0]+field[2][0] === 'xxx') return 'x'; // 1 ver
    if (field[0][1]+field[1][1]+field[2][1] === 'xxx') return 'x'; // 2 ver
    if (field[0][2]+field[1][2]+field[2][2] === 'xxx') return 'x'; // 3 ver
    if (field[0][0]+field[1][1]+field[2][2] === 'xxx') return 'x'; // 1 dia
    if (field[0][2]+field[1][1]+field[2][0] === 'xxx') return 'x'; // 1 dia

    if (field[0][0]+field[0][1]+field[0][2] === 'ooo') return 'o'; // 1 gor
    if (field[1][0]+field[1][1]+field[1][2] === 'ooo') return 'o'; // 2 gor
    if (field[2][0]+field[2][1]+field[2][2] === 'ooo') return 'o'; // 3 gor
    if (field[0][0]+field[1][0]+field[2][0] === 'ooo') return 'o'; // 1 ver
    if (field[0][1]+field[1][1]+field[2][1] === 'ooo') return 'o'; // 2 ver
    if (field[0][2]+field[1][2]+field[2][2] === 'ooo') return 'o'; // 3 ver
    if (field[0][0]+field[1][1]+field[2][2] === 'ooo') return 'o'; // 1 dia
    if (field[0][2]+field[1][1]+field[2][0] === 'ooo') return 'o'; // 1 dia
    return null
  }

  noMoreTurns() { 

    for (var i = 0; i < 3; i++) { 
      for(var j = 0; j < 3; j++){ 
        if (this.matrix[i][j] === null) { 
          return false 
        } 
      } 
    } 
    return true 
  } 

  isDraw() { 
    if ((this.getWinner() === null) && (this.noMoreTurns() === true)) { 
      return true 
    } else {  
      return false 
    } 
  } 

  getFieldValue(rowIndex, colIndex) { 
    return this.matrix[rowIndex][colIndex]; 
  } 
} 

module.exports = TicTacToe; 
