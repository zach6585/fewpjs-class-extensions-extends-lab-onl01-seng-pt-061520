// Your code here

class Polygon {
    constructor(array){
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }
    get perimeter() {
        let sum = 0;
        for (const i of this.array){
            sum += i;
        }
        return sum;
    }
}

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides !== 3){
            return false;
        }
        else {
            let smallest = 0;
            let middle = 0;
            let largest = 0;
            for (const i of this.array) {
                if (i > largest) {
                    smallest = middle;
                    middle = largest;
                    largest = i;
                }
                else if (middle < i && i < largest) {
                    smallest = middle;
                    middle = i;
                }
                else {
                    smallest = i;
                }
            }
            if (smallest + middle < largest) {
                return false;
            }   
            else {
                return true;
            }
        }
    } 
}

class Square extends Polygon {
    get isValid() {
        let exampleOne = this.array[0];
        if (this.countSides !== 4){
            return false;
        }
        else {
            for (const i of this.array){
                if (i !== exampleOne) {
                    return false;
                }
            }
            return true;
        }
    }

    get area() {
        let exampleOne = this.array[0];
        return exampleOne**2;
    }
}