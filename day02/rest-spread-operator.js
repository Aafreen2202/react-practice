//rest operator
//Array
const numbers=[2,4,6,7];
const[first,...newarray]=numbers;
console.log("first:",first);
console.log("new array:",newarray);

//object

const obj={
    temp1:"34",
    temp2:"564",
    fName:"Azhar",
    lName:"Academy",
};
const {temp1,temp2,...person}=obj;
console.log(person);

//spread operator
const obj1={...obj};
obj1.color="Fair";
console.log("obj:",obj);
console.log("obj1:",obj1);