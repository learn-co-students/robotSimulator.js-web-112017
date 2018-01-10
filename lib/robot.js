class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }
  //reminder to look back and figure out why that worked
  place(obj){
    this.setCoordinates(obj.x,obj.y);
    this.setBearing(obj.direction);
  }

  turnRight(){
  //  const directions = ["north", "east", "south", "west"]

    switch(this.bearing) {
      case 'north':
        this.setBearing('east')
        break;
      case 'east':
        this.setBearing('south')
        break;
      case 'south':
        this.setBearing('west')
        break;
        default:
        this.setBearing('north')
        break;
    }
    //recfactort this later
    // if (!this.bearing === "west"){
    //   this.setBearing(directions[directions.indexOf(this.bearing) + 1])
    // }
    // else{
    //   // this is when you're in west.
    //   this.setBearing('north')
    //   }
  }
  turnLeft(){
    switch(this.bearing) {
      case 'north':
        this.setBearing('west')
        break;
      case 'east':
        this.setBearing('north')
        break;
      case 'south':
        this.setBearing('east')
        break;
      default:
        this.setBearing('south')
        break;
      }
  }

  advance(){
    let xposition = this.coordinates[0]
    let yposition = this.coordinates[1]
    switch(this.bearing) {
      case 'north':
        this.setCoordinates(xposition,yposition+1)
        break;
      case 'east':
        this.setCoordinates(xposition+1,yposition)
        break;
      case 'south':
        this.setCoordinates(xposition,yposition-1)
        break;
      default:
        this.setCoordinates(xposition-1,yposition)
        break;
      }
  }



}
