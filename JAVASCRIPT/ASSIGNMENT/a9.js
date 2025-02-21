function isEligibleForDiscount(hasMembership,totalPurchase ){
    if(hasMembership==true&&totalPurchase>100)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(isEligibleForDiscount(true,8954))







function calculateTimeInSeconds(hours,minutes,seconds){
    let totalSeconds=hours*3600+minutes*60+seconds;
    return totalSeconds;
}
console.log(calculateTimeInSeconds(1,2,9))



function calculateBMI(weight,height){
    let bmi=weight/(height*height);
    return bmi;
    
}
console.log(calculateBMI(70,1.8))


function calculateFinalScore(kills,objectives,time){
    let finalscore = kills*100 + objectives*50 - time*10
    return finalscore
}
console.log(calculateFinalScore(34,97,88))