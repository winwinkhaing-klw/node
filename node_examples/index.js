var rec = require('./rectangel')
function solveReact(l,b){
    console.log("Solving for reactangle with l="+l+"and b"+b);
if(l<=0 || b<=0){
    console.log("Reactangle dimensions should be greater than zero: 1 =" +1 + ", and b="+ b);

}else{
    console.log("The area of rectangle is"+rec.area(l,b));
    console.log("The perimeter of the rectangle is"+rec.perimeter(l,b));
}
}
solveReact(2,4);
solveReact(2,3);
solveReact(0,3);
solveReact(-3,4);