function kingIsInCheck(chessboard) {
    var posisiRaja = [];
    var posisiKuda = [];
    for(i = 0; i < chessboard.length; i++){
        for(j = 0; j < chessboard[i].length; j++){
            if(chessboard[i][j] == '♔'){
                posisiRaja.push(i);
                posisiRaja.push(j);
            }
            if(chessboard[i][j] == '♞'){
                posisiKuda.push(i);
                posisiKuda.push(j);
            }
        }
    }
    var checkMate = false;
    for(i = 0; i <= posisiKuda.length; i += 2){
      if(posisiRaja[0] + 2 == posisiKuda[i] && posisiRaja[1] + 1 == posisiKuda[i+1]){
      checkMate = true;
      }
      else if(posisiRaja[0] - 2 == posisiKuda[i] && posisiRaja[1] - 1 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] + 2 == posisiKuda[i] && posisiRaja[1] - 1 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] - 2 == posisiKuda[i] && posisiRaja[1] + 1 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] + 1 == posisiKuda[i] && posisiRaja[1] + 2 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] - 1 == posisiKuda[i] && posisiRaja[1] - 2 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] + 1 == posisiKuda[i] && posisiRaja[1] - 2 == posisiKuda[i+1]){
        checkMate = true;
      }
      else if(posisiRaja[0] - 1 == posisiKuda[i] && posisiRaja[1] + 2 == posisiKuda[i+1]){
        checkMate = true;
      }
    }
    return checkMate
}
let chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♞', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '♞', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
console.log(kingIsInCheck(chessboard)) //True
chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '♞', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
console.log(kingIsInCheck(chessboard)) //False
chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '♞'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '♞', ' ', ' ', ' ', ' '],
    ['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
console.log(kingIsInCheck(chessboard)) //False
chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '♔', ' ', ' '],
    [' ', ' ', ' ', '♞', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
console.log(kingIsInCheck(chessboard)) //True