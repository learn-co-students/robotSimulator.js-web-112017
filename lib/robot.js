class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(coordinate1,coordinate2){
    this.coordinates = [coordinate1,coordinate2];
  }

  setBearing(bearing){
    let bearings = ["north", "south", "east", "west"];
    if (!bearings.includes(bearing.toLowerCase())) {
      throw "Invalid Robot Bearing";
    }
    this.bearing = bearing.toLowerCase();
  }

  place(obj){
    this.setCoordinates(obj.x,obj.y);
    this.setBearing(obj.direction);
  }

  turnRight(){
    let bearings = ['north','east','south','west', 'north']
    this.bearing = bearings[bearings.indexOf(this.bearing)+1]

  }

  turnLeft(){
    let bearings = ['north','west','south','east', 'north']
    this.bearing = bearings[bearings.indexOf(this.bearing)+1]
  }

  advance(){
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break
      case 'east':
        this.coordinates[0]++
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'west':
        this.coordinates[0]--
        break
    }
  }

  translateInstructions(instructions) {
    const inst = instructions.toUpperCase().split("")
    for (let i of inst) {
      switch (i) {
        case 'L':
        this.turnLeft()
        break
        case 'R':
        this.turnRight()
        break
        case 'A':
        this.advance()
        break
      }

    }
  }

}
