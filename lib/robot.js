class Robot {
	constructor() {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(vectorObj){
    this.setCoordinates(vectorObj['x'], vectorObj['y']);
    this.setBearing(vectorObj['direction']);
  }

  turnRight() {}

  turnLeft(){}

  advance(){}

  translateInstructions(){}

}
