const obj={
    fName:"Azhar",
    lName:"Academy",
    fullName:"",
    color:"",
    height:"",
};
const {fName,lName}=obj; //object destructuring allows to access the data from objects like arrays ,objects and assign it to new variables

console.log(fName);
console.log(lName);
//Array destructuring
const array=[2,5,8,6];
console.log(array[2]); //gives the mentioned index element 
const [a,b,c,d]=array;
//const[a, , ,b]=array; //a=2,b=6
console.log(a,b,c,d);

function circleArea({radius,draw:{diameter}})
{
    return 3.14*radius*radius;
}

const x={
    radius:4,
    title:"c1",
    width:"2px",
    draw:{diameter:8},
}
console.log(circleArea(x));