
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            str = ``
            data.map((data) => {
                str += `<div class="card">
                <div class="c1">
                <img src="${data.thumbnailUrl}" alt="">
                <h3>${data.title}</h3>
                </div>
                    <p>${data.id}</p>
                    <div class="d1">
                    <img src="${data.url}" alt="">
                     </div>
                </div>`
            })
            document.getElementById("lists").innerHTML = str
        })
        .catch((error) => {
            console.log(error);
        })
}
