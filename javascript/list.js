var a=[];

function addList(){
    a.push(document.getElementById("in").value);
    display();
}
function display(){
    let str = "";
    for (let i in a) {
    str =`${a[i]}  `;
    }
    const data=document.createElement("li");
    data.textContent=str;
    document.getElementById("list").appendChild(data);
    // const data1=document.createElement("button");
    // data1.textContent="delete";
    // document.getElementsByTagName('button').setAttribute('onclick','del()')
    // document.getElementById("list").appendChild(data1);
}

// function del(){
    
// }