function convertToCelcius(d){
let celcius = (d-32)*(5/9);
return celcius
}
console.log(convertToCelcius(100))


function calculateCircleArea(radius){
    let area= 3.14*radius*radius
    return area
}
console.log(`the area of circle is ${calculateCircleArea(7)}`)