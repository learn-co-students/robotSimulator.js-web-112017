let directions = ["north", "east", "south", "west"];

class Robot {
  constructor (coordinates=[0,0], bearing="north" ){
    this.coordinates = coordinates;
    this.bearing = bearing;
  };

  setCoordinates(new_coord1=0, new_coord2=0 ) {
    this.coordinates[0] = new_coord1;
    this.coordinates[1] = new_coord2;
  };

  setBearing(string) {
    if (directions.includes(string)) {
      this.bearing = string;
    } else {
      throw ("Invalid Robot Bearing");
    };
  }

  place(object) {
    this.setCoordinates(object.x, object.y);
    this.setBearing(object.direction);
  }

  turnRight() {
    let position = directions.indexOf(this.bearing);
       position ++;
    if (position > 3) {
      this.setBearing(directions[0]);
    } else {
      this.setBearing(directions[position]);
    }
  }

  turnLeft() {
    let position = directions.indexOf(this.bearing);
       position --;
    if (position < 0) {
      this.setBearing(directions[3]);
    } else {
      this.setBearing(directions[position]);
    }
  }

    advance() {
      if (this.bearing == directions[0]) {
      this.coordinates[1] ++
    } else if (this.bearing == directions[2])  {
      this.coordinates[1] --
    } else if (this.bearing == directions[1]) {
      this.coordinates[0] ++
    } else {
      this.coordinates[0] --
    }
    }

   translateInstructions(string) {
       let array = string.toUpperCase().split("");
       array.forEach(function(el) {
         // debugger
         if (el == "L") {
           console.log ("L")
           this.turnLeft()
         } else if (el == "R") {
           console.log ("R")
           this.turnRight()
         } else if (el == "A") {
           console.log ("A")
           this.advance()
         } else {
           throw "please enter valid command"
         }
       }.bind(this))
   }

}
