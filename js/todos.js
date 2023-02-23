function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
};

function displayTodos(todos){
    // get the container
    const todosContainer = document.getElementById('todos-container');
    
    for(const todo of todos){
    // create the child element   
        const todosDiv = document.createElement('div')
    // set innerText or innerHTML 
        todosDiv.innerHTML = `
            <h3>title:${todo.title}</h3>
            <p>User: ${todo.userId} </p>
            <h4>completed: ${todo.completed === false ? 'not complete' : ' complete' } </h4>
        `
    // appendchild
    todosContainer.appendChild(todosDiv) 
     }
}

loadTodos();