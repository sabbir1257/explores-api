function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((date) => dispalyPosts(date));
}

/* 
1. get the container element where you want to add the new elements
2. create child element 
3. set innerText or innerHTMl
4. appendChild
*/

function dispalyPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h4>Usear- ${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post description: ${post.body}</p>
        `;
    postsContainer.appendChild(postDiv);
  }
}

loadPosts();