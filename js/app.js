function loadData2(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => displayUsers(users) )
}

function displayUsers(users){
    console.log(users)
}

