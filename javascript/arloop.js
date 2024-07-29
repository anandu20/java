// //callback function

// function sendMessage(msg){
//     console.log(msg);
// }
// function getMessage(callback){
//     const msg="hello";
//     callback(msg);
// }
// getMessage(sendMessage);



a=[
    {name:"Savio",age:16,mark:45},
    {name:"Senthil",age:13,mark:82},
    {name:"Celine",age:18,mark:25},
    {name:"Tyrion",age:26,mark:96},
]


// a.forEach((data)=>{
//     console.log(data.name);
// })


// const x1=a.find((data)=>{
//     return data.name=="Tyrion"
// })
// console.log(x1);

// const x=a.filter((item)=>{
//     return item.age>20;
// })
// console.log(x);

// a.map((item)=>{
//     console.log(item.age);
// })


const val=a.reduce((total,item)=>{
    return total+item.mark;
},0)
console.log(val);