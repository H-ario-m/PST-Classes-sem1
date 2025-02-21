let a=4;
if(a>2)
{
    console.log("yes the value is greater than 2")
}
console.log("yes i have executes the code")

let num = 67;
if (num > 0)
{
    console.log("The number is positive");
}
else if (num==0)
    {
        console.log("The number is zero");
    }
else {
    console.log("The number is negative");
}





let marks = 60;
if (marks >=40)
{
    if (marks>=80){
        console.log("distinction")
    }
    else 
    {
        console.log("pass but not distinction")
    }
}
else{
    console.log("fail")
}






// SWITCH CASE

let day = 5;

switch(day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
     case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:  
    console.log("friday")
    break;
    default:
        console.log("any other day")      
}

function leap(year){
    if(year%4==0||year%400==0){
        console.log("its a leap year")
    }
    else{
        if(year%4==0)
        {
            console.log("leap year")

        }
        else
        {
            console.log("not a leap year")
        }
    }
}
console.log(leap(2000))










let color='T'
switch (color){
    case 'R':console.log("you chose red")
    break;
    case 'B':console.log("you chose blue")
    break;
    case 'G':console.log("you chose green")
    break;
    default:console.log("colour blind hai aap")
}






let seas= 4;

switch(seas) {
    case 1:
        case 12:
            case 2:
                console.log("winter")
                break;
                case 3:
                    case 4: