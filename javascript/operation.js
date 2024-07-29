
function change(){
    document.getElementById('h1').style.color='red';
    document.getElementById('h1').style.textAlign='center';
}
function add(){
    const x=+document.getElementById("t1").value;
    const y=+document.getElementById("t2").value;
    document.getElementById("nw").textContent=`Sum is ${x+y}`
}
function sub(){
    const x=+document.getElementById("t1").value;
    const y=+document.getElementById("t2").value;
    document.getElementById("nw").textContent=`Difference is ${x-y}`
}
function mul(){
    const x=+document.getElementById("t1").value;
    const y=+document.getElementById("t2").value;
    document.getElementById("nw").textContent=`Product is ${x*y}`
}
function div(){
    const x=+document.getElementById("t1").value;
    const y=+document.getElementById("t2").value;
    document.getElementById("nw").textContent=`Quotient is ${x/y}`
}
