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

  turnRight() {
		const directions = ["north", "east", "south", "west", "north"]
		const bearingIndex = directions.indexOf(this.bearing)
		this.setBearing(directions[bearingIndex + 1])
	}

  turnLeft(){
		const directions = ["north", "west", "south", "east", "north"]
		const bearingIndex = directions.indexOf(this.bearing)
		this.setBearing(directions[bearingIndex + 1])
	}

  advance(){
		let x = this.coordinates[0]
		let y = this.coordinates[1]
		switch (this.bearing) {
			case "north":
				this.setCoordinates(x, y + 1)
				break;
			case "east":
				this.setCoordinates(x + 1, y)
				break;
			case "south":
				this.setCoordinates(x, y - 1)
				break;
			case "west":
				this.setCoordinates(x - 1, y)
				break;
		}
	}

  translateInstructions(instructions){
		let steps = instructions.split("")

		for (const command of steps) {
			switch (command) {
				case "R":
					this.turnRight()
					break;
				case "L":
					this.turnLeft()
					break;
				case "A":
					this.advance()
					break;
			}
		}
	}
}
