 let product     
async function fetchProducts(){
    try {
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get("id");

        const res=await fetch(`https://dummyjson.com/products/${id}`)
        product=await res.json();  // res.jason is  used to convert  'https://dummyjson.com/products') content to json
        console.log(product);
        
        console.log(product.images);
        document.getElementById("img").src=`${product.thumbnail}`
        str1=``;
        product.images.map((i)=>{
            str1+=`<img  onmouseover ="changeImage('${i}')" src="${i}" alt="">`
        })

       
        document.getElementById("img").src=`${product.thumbnail}`;
        document.getElementById("h2a").innerHTML=`${product.title}`;
        document.getElementById("des").innerHTML=`${product.description}`
        document.getElementById("pr").innerHTML=`<span class="p"></span><span class="pr">${product.price} $</span>`
        document.getElementById("rt").innerHTML=`<span class="r">Rating: </span><span class="ra">   ${product.rating}  </span>`
        document.getElementById("cat").innerHTML=` <span class="c">Category </span><span class="ca">   ${product.category}  </span>`
        document.getElementById("divk").innerHTML=`<h4><b>Brand: </b>${product.brand}</h4>
                                                    <h4><b>sku: </b>${product.sku}</4>
                                                    <h3><b>Warranty Information: </b>${product.warrantyInformation}</h3>
                                                    <h3><b>Shipping Information: </b>${product.shippingInformation}</h3>`
        str=``
        product.reviews.map((p)=>{
            str+=`<div class="review" >
            <p><b>Name:</b>${p.reviewerName}</p>
            <p><b>Email:</b>${p.reviewerEmail}</p>
            <p> <b>Date:</b>${p.date}</p> 
            <p><b>Comment:</b>${p.comment}</p>
                   
                   
                   </div>`                          


        })
        document.getElementById("pol").innerHTML=` <p><b>Return Policy:</b>${product.returnPolicy}</p>
                                                  <p><b>Minimum Order Quantity:</b>${product.minimumOrderQuantity}</p>`

        document.getElementById("review").innerHTML=str;        
         document.getElementById("left1") .innerHTML=str1;                               

        // document.getElementById("qr").src=`${product.meta.qrCode}` 
                 
    }
    
    catch (error) {
        console.log(error);
    }
}
fetchProducts();

function addToCart(){
    console.log(product);
    localStorage.setItem(product.id,JSON.stringify(product));
    window.location.href='./cart.html'
    

}
function changeImage(img) {
    document.getElementById("img").src=img;
}