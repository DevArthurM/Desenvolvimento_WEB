function doGet() {
    fetch("https://jsonplaceholder.typicode.com/todos/").then(response => {
        console.log("RESPONSE: "+response.body)
        console.log("Promess work")
    })
    console.log("Doing GET request")
}