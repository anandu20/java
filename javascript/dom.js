
// // Adding values to tag
// document.getElementById("headr").innerHTML="<a href='#'>Night King</a>"
// // document.getElementById("headr").innerText="<a href='#'>Night King</a>"
// // document.getElementById("headr").textContent="<a href='#'>Night King</a>"

// // set attribute
// document.getElementById('head').setAttribute('class','name')

// // get attribute
// let x=document.getElementById("head").getAttribute("class");
// console.log(x);

// // remove attribute
// document.getElementById("head").removeAttribute("class")
 
// // set css
// document.getElementById('head').style.color='red';
// document.getElementById('head').style.textAlign='center';


// // create new element
// const data=document.createElement("p");
// data.textContent="hai Team";
// document.getElementById("new").appendChild(data);

// // remove element
// const a=document.getElementById("a");
// document.getElementById("new").removeChild(a);

// function clickMe(){
//     const x=+document.getElementById("inp").value;
//     document.getElementById("nw").textContent=`Square is ${x*x}`
// }
// Key Event
function keyEvent(e){
    console.log(e.value);
}
