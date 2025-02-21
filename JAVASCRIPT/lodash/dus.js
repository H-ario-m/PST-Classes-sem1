import hii from "lodash"
let std={
    name:"chigota",
    age: 7,
    address:{
        state:"up",
        city:"varanasi"
    },
    intro:function(){
console.log("mai nhi janta tujhe")
    }
 } 
 let copystd=JSON.parse(JSON.stringify(std))
 copystd.name="chiku"
 copystd.name="chiku"
console.log(std)
 console.log(copystd)
 copystd.address.city="narakh"
 console.log(std)
 console.log(copystd)
 let cpt=hii.cloneDeep(std)
 console.log(cpt)
 cpt.intro()