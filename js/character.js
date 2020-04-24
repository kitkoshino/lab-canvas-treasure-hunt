class Character {
  constructor(col,row) {
    this.col = col;
    this.row = row;
    this.score = 0;
    this.image = new Image();
    this.image.src = "../images/character-down.png";
  }
  moveUp() {
    this.row --;
  }

  moveRight() {
    this.col ++ ;
  }

  moveDown() {
    this.row ++;
  }
 
  moveLeft() {
    this.col --;
  }

  sumScore() {
    this.score ++;
  }
}



