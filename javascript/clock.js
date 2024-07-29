let i=10;
let x=setInterval(() => {
    document.getElementById("new").textContent=i;
    if(i==0)
        {
            document.getElementById("new").style.color="black";
            document.getElementById("new").textContent="start";
            clearInterval(x);
        }
        i--;
},1000);
// let i=0;
// let x=setInterval(() => {
//      document.getElementById("new").textContent=i;
//          if(i==5)
//         {
//             document.getElementById("new").textContent="lets go and lets get"
//             clearInterval(x);

//         }
//         i++;

//  },1000);