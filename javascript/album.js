
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
          
                <h1>${data.userId}</h1>
             
                <h2>${data.id}</h2>

                <h3>${data.title}</h3>
 
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
