var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for reactangle with l = " + l + " and b = " + b);

    if(l <=0 || b <= 0){
        console.log("Rectanglee demension should be greater than zero: l = " + l + " and b = " + b);
    }
    else{
        console.log("Area of the rectangle is " + rect.area(l,b));
        console.log("Perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
solveRect(0,5);