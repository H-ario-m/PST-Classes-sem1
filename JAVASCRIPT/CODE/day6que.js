
function average()
{
    const student={
        name:"John",
        class:'10',
        gender:"male",
        rollno:39,
        marks:[54,78,98,89,65]
    }
    let sum= student.marks[0]+student.marks[1]+student.marks[2]+student.marks[3]+student.marks[4];
    let averae=sum/5;
    return averae;
}
let stud=average();
console.log(stud);





function para(str){
    let out= str*2;
return out
}

console.log(para("567"))

function par(st)
{
    let a = st.length;
    
 if(a%2==0)
 {
    b= a/2;
    return st[b-1]*2;
 }
    else 
    {
        b= Math.floor(a/2);
        return st[b]*2
    }
}
console.log(par("59698667"))






function param(name,age,clas,roll)
{
    console.log(`my name is ${name} and i am ${age} years old. I am studying in ${clas} and my roll no is ${roll} `)
}
param("Anshuman ojha",18,"btech first year",7383)






const hf=[54,"68"]
console.log(hf)