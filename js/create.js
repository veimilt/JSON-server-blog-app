document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    const baseUri = "http://localhost:3000";

    const createPost = async (e) => {

        e.preventDefault();

        const doc = {
            title: form.title.value,
            body: form.body.value,
            likes: 0
        }

        await fetch(`${baseUri}/posts`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doc)
        })

        window.location.replace("/");
    }

    form.addEventListener('submit', createPost);
});