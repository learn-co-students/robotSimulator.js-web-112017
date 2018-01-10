class Robot {
	constructor(bearing = 'north', coordinates = [0,0]) {
    this.bearing = bearing;
    this.coordinates = coordinates;
  }
  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }
  setBearing(direction) {
    switch (direction) {
      case 'north':
        // advance will add to y
        this.bearing = 'north'
      break;
      case 'south':
        // advance will subtract from y
        this.bearing = 'south'
      break;
      case 'east':
        // advance will add to x
        this.bearing = 'east'
      break;
      case 'west':
        // advance will subtract from x
        this.bearing = 'west'
      break;
      default:
        throw 'Invalid Robot Bearing';
    }
  }
  place(obj) {
    this.setBearing(obj.direction);
    this.setCoordinates(obj.x, obj.y);
  }
  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east';
        break;
      case 'east':
        this.bearing = 'south';
      break;
      case 'south':
        this.bearing = 'west';
      break;
      case 'west':
        this.bearing = 'north';
      break;
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west';
        break;
      case 'east':
        this.bearing = 'north';
      break;
      case 'south':
        this.bearing = 'east';
      break;
      case 'west':
        this.bearing = 'south';
      break;
    }
  }
  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
      break;
      case 'south':
        this.coordinates[1] -= 1
      break;
      case 'west':
        this.coordinates[0] -= 1
      break;
    }
  }
  translateInstructions(input) {
    for (var i = 0; i < input.length; i++) {
      switch (input[i].toLowerCase()) {
        case 'l':
          this.turnLeft();
          break;
        case 'r':
          this.turnRight();
        break;
        case 'a':
          this.advance();
        break;
        default:
      }
    }
  }
}
