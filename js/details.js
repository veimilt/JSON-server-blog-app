document.addEventListener('DOMContentLoaded', () => {
    const id = new URLSearchParams(window.location.search).get("id");
    let baseUri = "http://localhost:3000";
    const deleteBtn = document.querySelector(".delete");

    const renderDetails = async () => {
        const container = document.querySelector(".details");
        const response = await fetch(`${baseUri}/posts/${id}`);
        const post = await response.json();

        const template = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;

        container.innerHTML = template;
    }
    renderDetails();
    deleteBtn.addEventListener('click', async (e) => {
        const response = await fetch(`${baseUri}/posts/${id}`, {
            method: 'DELETE'
        })
        window.location.replace("/");
    })
});



