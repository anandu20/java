let qu=[]
let total=0;

function getCart(){

    str=``
    str1=``

    console.log(localStorage.length);

    for(i=0;i<localStorage.length;i++){
      qu[i]=1;
        const key=localStorage.key(i)
        // console.log(key);
        
        const value=JSON.parse(localStorage.getItem(key))
        console.log(value);

        str+=` <div class="cards">

         <div class="cimg1">

                <img id="cimg" src="${value.thumbnail}" alt="">

         </div>

           <div class="details">
             <h3>${value.title.substring(0,15)}</h3>
             <h3 id="grn">${value.price}$</h3>
            <p>${value.description}</p>
                       <h5>Quantity</h5>
                    <p>
                        <span class="qnty" onclick="minus('${i}')"><img src="./images/remove_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt=""></span>
                        <span id="txt${i}" class="txt"></span>
                        <span class="qnty" onclick="plus('${i}')"><img src="./images/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt=""></span>
                    </p>
          </div>

        

            <div class="btrn1">

                <button id="btr" onclick="removeCart(${value.id})">REMOVE</button>
             </div>
     </div>`
     str1+=`<tr>
     <td>${value.title}</td>
     <td><span id="td${i}" ></span></td>
     <td><span id="pr${i}" ></span></td>
     </tr>`;


    }
    document.getElementById("add").innerHTML=str;
    document.getElementById("table").innerHTML=str1;
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const value=JSON.parse(localStorage.getItem(key));
        document.getElementById(`txt${i}`).innerHTML=qu[i];
        document.getElementById(`td${i}`).innerHTML=qu[i];
        cost=value.price-(value.price*value.discountPercentage/100);
        c=cost*qu[i];
        console.log(c);
        total+=c;
        document.getElementById(`pr${i}`).innerHTML=`$${c.toString().substring(0,7)}`;
    }
    
    document.getElementById("tm").innerHTML=`Total Amount: $${total.toString().substring(0,7)}`;
    
}

getCart()

function removeCart(id){
    // console.log(id);
    localStorage.removeItem(id);
    getCart();
}


function minus(j){
  a=parseInt(j);
  qu[a]-=1;
  console.log(qu[a]);
  document.getElementById(`txt${a}`).innerHTML=qu[a];
  document.getElementById(`td${a}`).innerHTML=qu[a];
  const key=localStorage.key(a);
  const value=JSON.parse(localStorage.getItem(key));
  cost=value.price-(value.price*value.discountPercentage/100);
  c=cost*qu[a];
  console.log(c);
  total+=c;
  document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
  document.getElementById("tm").innerHTML=`Total Amount: $${total.toString().substring(0,7)}`
}
function plus(i){
  a=parseInt(i);
  qu[a]++;
  document.getElementById(`txt${a}`).innerHTML=qu[a];
  document.getElementById(`td${a}`).innerHTML=qu[a];
  const key=localStorage.key(a);
  const value=JSON.parse(localStorage.getItem(key));
  cost=value.price-(value.price*value.discountPercentage/100);
  c=cost*qu[a];
  console.log(c);
  total+=c;
  console.log(total);
  document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
  document.getElementById("tm").innerHTML=`Total Amount: $${(total+5).toString().substring(0,7)}`
}

function clearA(){
  localStorage.clear()
  document.body.innerHTML="<h2 > OOPS YOUR  CART IS EMPTY !!!!</h2> <a href='./flipkart.html'> Go to Products Page</a>"
}