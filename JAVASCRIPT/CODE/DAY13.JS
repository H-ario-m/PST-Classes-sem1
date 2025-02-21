//STRING CONCATENATION
// let str ="kuch bhi"
// let str2 = ""
// for (i=0;i<str.length;i++){
//     str2=str.charAt(i)+str2
// }
// console.log(str2)



// let st ="kuch bhi"
// let st2 = ""
// for (i=0;i<st.length;i++){
//     st2=st[i]+st2
// }
// console.log(st2)







console.log("hello".slice(-3))
console.log("hello".slice(-3,-1))


let ms="hello duniya"
let mss=ms.replace("duniya","loon")
console.log(mss)
console.log(ms)
let msg="hello duniya,duniya is dash"
let mssg=msg.replaceAll("duniya","doods")
console.log(mssg)

let abs="hello duniya,Duniyamadalto is dash"
let abb= abs.replaceAll(/duniya/gi,"chaman")
console.log(abb)
let d=new Date()
console.log(d)
// console.log(d.getTime())//milliseconds
// console.log(d.getFullYear())
// console.log(d.getMonth())//0-11--jan-dec
// console.log(d.getDay())//0-6 sunday-saturday
// console.log(d.getHours())
// console.log(d.getMinutes())//minutes at moment of running//minutes will  go from 0to 59
// console.log(d.getSeconds())//exact second at the moment of trunning
// console.log(d.getMilliseconds())//the ecact milisecond goung on nowconsole.log(d.getTime())//milliseconds
console.log(d.setFullYear(2028))
console.log(d.setMonth(3))
console.log(d.setDate(5))
console.log(d.setHours())
console.log(d.setMinutes())
console.log(d.setSeconds())
console.log(d.setMilliseconds())