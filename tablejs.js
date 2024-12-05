// function multiplictionTable(){
//     let showTable ="";
//     for( let i = 1; i<=15; i++){
//          showTable += `<tr><tr><td> multiplication table ${i} times</td></tr></tr>`;
//         console.log(i);
//     for(let j= 2; j <13; j++){
//         showTable +=  `<tr><td>${i} * ${j} = ${i * j}</td></tr>`;
//         console.log(j);
//     }
//     }
//     document.getElementById("multiply").innerHTML += showTable
// }

function usersTable(){
    let start=document.getElementById('start').value
    let end=document.getElementById('end').value
    let length =document.getElementById('length').value

    let displayTable ="";
    for( let i = start; i<=end; i++){
         displayTable += `<tr><tr><td> multiplication table ${i} times</td></tr></tr>`;
        console.log(i);
    for(let j= 2; j <=length; j++){
        displayTable +=  `<tr><td>${i} * ${j} = ${i * j}</td></tr>`;
        console.log(j);
    }
    }
    document.getElementById("usersTable").innerHTML += displayTable
}
}