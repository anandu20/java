async function fetchProducts(){
    try {
        const res=await fetch('https://dummyjson.com/products')
        const products=await res.json();  // res.jason is  used to convert  'https://dummyjson.com/products') content to json
        str=``
            str+=` <div class="left">
             <img src="${products.products[0].thumbnail}" alt="">
            <div class="but">
                <button id="bt1">ADD TO CART</button> <button id="bt2">BY NOW</button> 
            </div>
        </div>
        <div class="right">
            
<h2>${products.products[0].title}</h2>
<p>${products.products[0].description}</p>

<h2><span class="p">PRICE:</span><span class="pr">${products.products[0].price}</span></h2>
<h3><span class="r">Rating:</span><span class="ra">${products.products[0].rating}</span></h3>

<h3>Category:${products.products[0].category}</h3>
<p><b>Brand: </b>${products.products[0].brand}</p>
<p><b>sku: </b>${products.products[0].sku}</p>
<p><b>Warranty Information: </b>${products.products[0].warrantyInformation}</p>
<p><b>Shipping Information: </b>${products.products[0].shippingInformation}</p>
<h3 align="center"><u>Reviews</u></h3>
            <div class="rev">
                <div class="review">
                    <p><b>Name:</b>${products.products[0].reviews[0].reviewerName}</p>
                    <p><b>Email:</b>${products.products[0].reviews[0].reviewerEmail}</p>
                    <p> <b>Date:</b>${products.products[0].reviews[0].date}</p>
                    <p><b>Comment:</b>${products.products[0].reviews[0].comment}</p>
                </div>
            </div>
<div>
            <p><b>Return Policy:</b>${products.products[0].returnPolicy}</p>
            <p><b>Minimum Order Quantity</b>${products.products[0].minimumOrderQuantity}</p>
            
            
            <img src="${products.products[0].meta.qrCode}" alt="">
           </div>
        </div>`
        document.getElementById("info").innerHTML=str;

    } catch (error) {
        console.log(error);
    }
}
fetchProducts();