class Robot {
  constructor(name){
    this.name = name;
    this.coordinates = [0,0];
    this.bearing = 'north';
  }
    //your solution here
  //set coordinates
  setCoordinates(x,y){
    this.coordinates = [x,y];
  }

 setBearing(bearing){
    if (bearing !== "north" && bearing !== "south" && bearing !== "east" && bearing !== "west"){
      throw 'Invalid Robot Bearing';
    } else {
      this.bearing = bearing
    }
  }

 place(obj){
    this.setBearing(obj.direction);
    this.setCoordinates(obj.x, obj.y);
  }

 turnRight(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
      default: this.bearing = 'north'
      break;
    }
  }

 turnLeft(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      default: this.bearing = 'north'
      break;
    }
  }

 advance() {
    switch (this.bearing) {
      case "north":
        this.setCoordinates(this.coordinates[0],++this.coordinates[1]);
        break;
      case "south":
        this.setCoordinates(this.coordinates[0],--this.coordinates[1]);
        break;
      case "east":
        this.setCoordinates(++this.coordinates[0],this.coordinates[1]);
        break;
      case "west":
        this.setCoordinates(--this.coordinates[0],this.coordinates[1]);
        break;
    }
  }

 translateInstructions(string) {
    for (let character of string){
      switch (character) {
        case 'A':
          this.advance()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'L':
          this.turnLeft()
          break;
        default:


     }
    }
  }



}
