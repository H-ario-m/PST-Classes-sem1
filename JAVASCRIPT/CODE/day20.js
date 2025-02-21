// create a createcounter function which has one variable count and creste counter returns two functions (1increament 2. decreament) and prove that returned function has access to outer variable count

function createcounter()
{
    let count=0;
    return{
        increament:function(){
            count++
            return count
        },
        decreament:function(){
            count--
            return count
        }
    }
}


let call=createcounter()
console.log(call.decreament());
console.log(call.increament());
console.log(call.increament());
console.log(call.increament());
console.log(call.increament());
console.log(call.increament());