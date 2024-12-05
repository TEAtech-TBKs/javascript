// // for (let i = 0; < 10; i++){
// //     console.log("This loop ran" + i);
// // }
// let i = 10

// while (i > 10){
//     console.log("while loops" + i)
// }
let info = ["yam", 12,"name"]
// let studentObject= {name:"james",age:21, course:"javaScript"}
// console.log(studentObject.name)
// console.log(info)
// let studentArray= [{name:'john' , age:14, course:"javascript"},
//                    {name:'cyon' , age:17, course:"java"},
//                    {name:'mary' , age:10, course:"typescript"}
// ]
// // an object inside an Array
// console.log(studentArray[2])
// 
// let schoolArray= [["javascript", "React", "Node"],["mary","bisi","anuoluwa"]]
// console.log(schoolArray[0][2])

let array = [
    ["jerry",34,"egg"],
    ["sarah",24,"rice"],
    ["milani",14,"yam"],
];
for (let i=0; i < array.length; i++){
    console.log("start" + i)
    for(let j = 0; j < array[i].length; j++)
        console.log("this", array[i][j])
    ;
}