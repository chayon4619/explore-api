function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    console.log(todos)
    // get the container
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
        <h2>title-${todo.title}</h2>
        <h3>id:${todo.id}</h3>
        <h3>is colpleted:${todo.completed === true ? 'completed' : 'not complete'}</h3>
        `
        // appendChild
        todoContainer.appendChild(todoDiv)

    }
}

loadTodos()