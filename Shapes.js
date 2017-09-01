// the following is a prototype, Shape, and an object of that type, theShape.
// Below is the constrructor property for the object theShape.

function Shape(type) {
    this.type = type;
    this.get_type = function() {
        return this.type;
    }
}

function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
}

function Square(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
}

function Pentagon(side1, side2, side3, side4, side5) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
    this.side5 = side5;
}

// instance of Shape constructor (insert values)
// var triangle = new Shape(2,2.5,3);
// var square = new Shape(2,2,2,2);

// this means that all triangles will inherit their own instance of the Shapes properties
Triangle.prototype = new Shape('triangle')

var rightTriangle = new Triangle(3,3,3);

// console.log(square)
// console.log(rightTriangle.type);

// invoke function print on terminal
// rightTriangle.get_type();

Square.prototype = new Shape('square');

var square = new Square(4,4,4,4);
// Square.get_type();

// reset constructor
square.constructor = Square;

// console.log(Square.get_type());
console.log(square.constructor);
console.log(square);

Pentagon.prototype = new Shape('pentagon')

var pentagon = new Pentagon(2,2,2,2,2);




