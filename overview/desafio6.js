fetch('http://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then(data => {
    data.forEach(function(i){
        let lista = document.createElement("ul")
        lista.innerText = `${i.name} ${i.email}`
        document.body.appendChild(lista);
        // console.log(i.name, i.email)
    })
})