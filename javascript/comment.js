
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
          
                <h1>${data.postId}</h1>
             
                <h2>${data.id}</h2>

                <h2>${data.name}</h2>

                <P>${data.body}</P>




                
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
