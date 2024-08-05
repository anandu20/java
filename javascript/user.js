
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
          
                <div class="div1">
              <h1>${data.id}</h1>
              <h2>${data.name}</h2>
              <h3>${data.username}</h3>

            </div>

             <div class="div2">
                <h1>${data.address.street}</h1>
                <h3>${data.address.suite}</h3>
                <h3>${data.address.city}</h3>
                <h3>${data.address.zipcode}</h3>
                <h3>${data.address.city}</h3>
               <h3>${data.address.geo.lat}</h3>
                <h3>${data.address.geo.lng}</h3>

            </div>
             
            <div class="div3">

                <h2>${data.phone}</h2>
                <h3>${data.website}</h3>
                <h3>${data.company.name}</h3>
                <h3>${data.company.catchPhrase}</h3>
                <h3>${data.company.bs}</h3>

            </div>






                
                







 
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
