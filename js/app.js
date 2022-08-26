function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
};

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => showData(users));
}

function showData(users) {
    console.log(users)
}