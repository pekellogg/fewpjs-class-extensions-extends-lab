class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.count
  }

  get perimeter() {
    let perimeter = 0;
    for (const side of this.sides) {
      perimeter += side;
    }
    return perimeter
  }
}

class Triangle extends Polygon {
  // sum lengths any 2 sides > 3rd side === valid
  get isValid() {
    if (this.count !== 3) return;
    const [side1, side2, side3] = this.sides;
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get area() {
    if (this.isValid) return this.sides[0] * this.sides[0]
  }

  get isValid() {
    if (this.count > 4) return;
    const uniqueSides = [...new Set(this.sides)];
    return uniqueSides.length === 1 ? true : false
  }
}