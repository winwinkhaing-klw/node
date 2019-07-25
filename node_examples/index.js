var rec = require('./rectangel')
function solveReact(l,b){
    function solveRect(l,b) {
        console.log("Solving for rectangle with l = "
                    + l + " and b = " + b);
        rect(l,b, (err,rectangle) => {
            if (err) {
                console.log("ERROR: ", err.message);
            }
            else {
                console.log("The area of the rectangle of dimensions l = "
                    + l + " and b = " + b + " is " + rectangle.area());
                console.log("The perimeter of the rectangle of dimensions l = "
                    + l + " and b = " + b + " is " + rectangle.perimeter());
            }
        });
        console.log("This statement after the call to rect()");
    };
}
solveReact(2,4);
solveReact(2,3);
solveReact(0,3);
solveReact(-3,4);