document.addEventListener('DOMContentLoaded', () => {
    const renderPosts = async () => {
        const container = document.querySelector(".blogs");

        let uri = "http://localhost:3000/posts";
        const response = await fetch(uri);
        const posts = await response.json();

        let template = "";
        posts.forEach(post => {
            template += `
            <div class="post">
                <div class="flex-row">
                    <h2>${post.title}</h2>
                    <p class="likes">${post.likes} likes</p>
                </div>
                <p>${post.body.slice(0, 200)}...</p>
                <a href="/details.html?id=${post.id}">read more</a>
            </div>
            `
        })

        container.innerHTML = template;
    }
    renderPosts();
    
});