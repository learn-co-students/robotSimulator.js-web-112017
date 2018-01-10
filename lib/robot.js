class Robot {
  
  constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    let bearings = ['north', 'south', 'east', 'west'];
    if(bearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw `Invalid Robot Bearing`;
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y);
    this.setBearing(placement.direction);
  }

  turnRight() {
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
    }
  }

  turnLeft() {
    if(this.bearing === 'north') {
      this.bearing = 'west';
    } else if (this.bearing === 'west') {
      this.bearing = 'south';
    } else if (this.bearing === 'south') {
      this.bearing = 'east';
    } else {
      this.bearing = 'north';
    }
  }

  advance() {
    if(this.bearing === 'north') {
      ++this.coordinates[1];
    } else if (this.bearing === 'east') {
      ++this.coordinates[0];
    } else if (this.bearing === 'south') {
      --this.coordinates[1];
    } else {
      --this.coordinates[0];
    }
  }

  translateInstructions(string) {
    for(let el of string) {
      if (el === 'R') {
        this.turnRight();
      } else if (el === 'L') {
        this.turnLeft();
      } else {
        this.advance();
      }
    }
  }

}