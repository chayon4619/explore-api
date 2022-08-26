function postsData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts(data))
}


/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/


function posts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>Post title:${post.title}</h5>
        <p>Post description-${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}
postsData()