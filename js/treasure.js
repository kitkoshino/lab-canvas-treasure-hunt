class Treasure {
  constructor() {
    this.setRandomPosition();
    this.image = new Image();
    this.image.src = "../images/treasure.png";
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 9);
    this.row = Math.floor(Math.random() * 9);

  }
 


}