
async function fetchProducts(){
    try {
        const res=await fetch('https://dummyjson.com/products')
        const products=await res.json();  // res.jason is  used to convert  'https://dummyjson.com/products') content to json
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
            <img src="${product.thumbnail}" alt="">
            <h3>${product.title.substring(0,15)}</h3>
            <p>${product.price}</p>
        <a href="./product.html?id=${product.id}"><button>more details</button></a>
        </div>`
        })
        document.getElementById("products").innerHTML=str;

    } catch (error) {
        console.log(error);
    }
}

fetchProducts();    

    document.getElementById("sr").addEventListener('keyup',async(e)=>{     //we need to call async to use await
    console.log(e.target.value);
    try {
    const res=await fetch("https://dummyjson.com/products")
    const products=await res.json();
    // console.log(products.products);// 
    str=``
    products.products.filter((i)=>i.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{
        str+=`<div class="card">
        <img src="${product.thumbnail}" alt="">
        <h3>${product.title.substring(0,15)}</h3>
        <p>${product.price}</p>
           <a href="./product.html?id=${product.id}"><button >More details</button></a>

            </div>`

})
document.getElementById("products").innerHTML=str;
    
    } catch (error) {
        console.log(error);     
        
        
    }
    
})