function getCart(){

    str=``
    console.log(localStorage.length);

    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        // console.log(key);
        
        const value=JSON.parse(localStorage.getItem(key))
        console.log(value);

        str+=` <div class="cards">

         <div class="cimg1">

                <img id="cimg" src="${value.thumbnail}" alt="">

         </div>

            <h2>${value.title.substring(0,15)}</h2>

            <div class="btrn1">

                <button id="btr" onclick="removeCart(${value.id})">REMOVE FROM CART</button>
             </div>
     </div>`


    }
    document.getElementById("add").innerHTML=str;
}
getCart()

function removeCart(id){
    // console.log(id);
    localStorage.removeItem(id);
    getCart();
}