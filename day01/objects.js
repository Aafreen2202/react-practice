const mystery="answer";
const institute="Azhar Academy";
const obj={
    a:3,
    b:4,
    foo(){},
    xyz:()=>{},
    ["first name"]:"Azhar",
    ["lName"]:"shaikh",
    [mystery]:65, // answer is the value of mystery so answer will contain 65 
    institute,

};
console.log(obj["first name"]);
console.log(obj.mystery);
console.log(obj.answer);
console.log(obj.lName);
console.log(institute);