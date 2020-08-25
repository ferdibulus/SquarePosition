//Variables declared and initialized
//By using intersect method the object can communicated each other. So 
var x = 0;
var a = 250;
var b = 400;
var c = 120;
var d = 30;

//Arrays
var Squares = [8];
unique_random_numbers = [7];
unique_color_random_numbers = [];
var colorArray = ['blue', 'yellow', 'orange', 'purple', 'green', 'red', 'magenta', 'gray'];

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  rectMode(CENTER);
  background(0);

}

function draw() {

  // Create multiple unique Square "object" with unique color.
  generateColorRandNumber();
  for (x = 0; x < 8; x++) {
    selectColor = colorArray[unique_color_random_numbers[x]];
    s1 = new Square(selectColor, a, b, c, d);
    Squares.push(s1);
    a = a + 210;
  }

  //Create multiple unique Square in Canvas.
  generateRandNumber();
  for (x = 0; x < 7; x++) {
    var randNum = unique_random_numbers[x];
    Squares[randNum].createSquare();
  }

  //in here the objects are communicate each other 
  if (Squares[1].intersects(Squares[2])) {
    Squares[1].sColor = 'red';
  }
}

function mousePressed() {
  Squares[1].squarePressed();
}

function mouseDragged() {

}

//In here,the function create unique number. 
function generateRandNumber() {
  while (unique_random_numbers.length < 7) {
    var random_number = Math.floor(Math.random() * (8 - 1) + 1);
    if (unique_random_numbers.indexOf(random_number) == -1) {
      unique_random_numbers.push(random_number);
    }
  }
}

//the function create unique number for selecting color. 
function generateColorRandNumber() {
  while (unique_color_random_numbers.length < 7) {
    var random_number = Math.floor(Math.random() * 8);
    if (unique_color_random_numbers.indexOf(random_number) == -1) {
      unique_color_random_numbers.push(random_number);
    }
  }
}

//All squares can be created by using Square class.
class Square {
  constructor(color, x, y, z, t) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
  }
  get sColor() {
    return this.color;
  }
  set sColor(color) {
    this.color = color;
  }

  get sx() {
    return this.x;
  }
  set sx(x) {
    this.x = x;
  }

  get sy() {
    return this.y;
  }
  set sy(y) {
    this.y = y;
  }

  get sz() {
    return this.x;
  }
  set sz(z) {
    this.z = z;
  }

  get st() {
    return this.t;
  }
  set st(t) {
    this.t = t;
  }


  createSquare() {
    fill(this.color);
    square(this.x, this.y, this.z, this.t);
  }

  squarePressed() {
    this.x = this.x + mouseX;
    this.y = this.y + mouseY;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < 120) {
      return true;
    } else {
      return false;
    }
  }
}