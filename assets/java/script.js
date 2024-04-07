const username = document.querySelector('#name');
const blogTitle = document.querySelector('#blogtitle');
const textarea = document.getElementById('myTextarea');
const fillOut = document.querySelector('#fillout');
const blogpost = {};

function localStore() {
    const totalPosts = Object.keys(localStorage).filter(key => key.includes('blogpost')).length;
    const postArray = [username.value, blogTitle.value, textarea.value];

    const blogpost = `blogpost${totalPosts + 1}`;

    const postObject = {
        username: postArray[0],
        title: postArray[1],
        content: postArray[2]
    };

    localStorage.setItem(blogpost, JSON.stringify(postObject));
}


document.getElementById("submitBlog").addEventListener('click', function() {
    if (username.value && blogTitle.value && textarea.value) {
        localStore();
       window.location.href = "./html/writing.html";
    } else {
        fillOut.textContent = 'Please fill out each field';
    }
});

