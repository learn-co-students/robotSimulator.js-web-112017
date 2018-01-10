class Robot {
	//your solution here
  constructor(bearing = "north", coordinates = [0,0]){
    this.bearing = bearing
    this.coordinates = coordinates
  }
  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)){
      this.bearing = direction
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(input) {
    this.setCoordinates(input["x"], input["y"])
    this.setBearing(input["direction"])
  }

  turnRight() {
    switch(this.bearing) {
      case "north":
        this.setBearing("east")
        break
      case "east":
        this.setBearing("south")
        break
      case "south":
        this.setBearing("west")
        break
      case "west":
        this.setBearing("north")
        break
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case "north":
        this.setBearing("west")
        break
      case "west":
        this.setBearing("south")
        break
      case "south":
        this.setBearing("east")
        break
      case "east":
        this.setBearing("north")
        break
    }
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1]++
        break
      case "west":
        this.coordinates[0]--
        break
      case "south":
        this.coordinates[1]--
        break
      case "east":
        this.coordinates[0]++
        break
    }
  }

  translateInstructions(input) {
    let newInput = input.split("")

    for (let i = 0; i < newInput.length; i++) {
      switch(newInput[i]) {
        case "R":
           this.turnRight()
         break
       case "L":
        this.turnLeft()
        break
       case "A":
        this.advance()
        break;
      }
    }
  }

}


// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
