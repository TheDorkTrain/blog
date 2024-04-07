const username = document.querySelector('#name');
const blogTitle = document.querySelector('#blogtitle');
const blogCont = document.querySelector('#blogcont');
const fillOut = document.querySelector('#fillout');

const togDark = document.getElementById('darkmode');

const switchElement = document.querySelector('.switch');

const parsedBlogPosts = retrieveBlogPosts();

const sectionElements = [];

adjustPosition(); 

function adjustPosition() {

    if (window.innerWidth >= 568) {
    const screenWidth = window.innerWidth;
    const newLeftPosition = screenWidth - 300;
    switchElement.style.left = `${newLeftPosition}px`; }
}


togDark.addEventListener(`click`, function (event) {
    const toggle = event.target

    if (toggle.getAttribute('data-state') === 'dark') {
    document.querySelector('header').style.backgroundColor = "var(--main-color";
    document.querySelector('.postsbody').style.backgroundColor = "white";
    document.querySelector('section').style.backgroundColor = "var(--sub-color2";
    document.querySelector('h2').style.color = "var(--main-dark";
    document.querySelector('h4').style.color = "var(--main-dark";
    document.querySelector('#lighttext').style.color = "var(--main-dark)";
    document.querySelector("a").style.color = "var(--main-dark)";
    document.querySelector("li").style.backgroundColor = "white";
    sectionElements.forEach(section => {
        section.style.backgroundColor = "var(--sub-color2)";
        section.style.border = "5px dashed var(--main-dark)";
        section.style.color = "var(--main-dark)";
    });
    toggle.dataset.state = 'lightmode';

    } else {
    document.querySelector('header').style.backgroundColor = "var(--sub-dark";
    document.querySelector('.postsbody').style.backgroundColor = "var(--main-dark)";
    document.querySelector('section').style.backgroundColor = "var(--sub-dark)";
    document.querySelector('h2').style.color = "white";
    document.querySelector('h4').style.color = "var(--gray)";
    document.querySelector('#lighttext').style.color = "var(--gray)";
    document.querySelector("a").style.color = "white";
    document.querySelector("li").style.backgroundColor = "var(--main-dark)";
    sectionElements.forEach(section => {
        section.style.backgroundColor = "var(--sub-dark)";
        section.style.color = "white";
        section.style.border = "5px dashed var(--main-light)";
    });
    toggle.dataset.state = 'dark';
    }
});

function retrieveBlogPosts() {
    const blogPosts = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.includes('blogpost')) {
            const postString = localStorage.getItem(key);

            const postObject = JSON.parse(postString);

            blogPosts.push(postObject);
        }
    }

    return blogPosts;
}


parsedBlogPosts.forEach(post => {
        const section = document.createElement("section");
        section.style.display = "flex";
        section.style.justifyContent = "flex-start";
        section.style.flexWrap = "wrap"
        section.style.color = "var(--main-dark)";
        document.body.appendChild(section);


        const listName = document.createElement("p");
        listName.id = "Name";
        //listName.style.borderRight = "5px dashed var(--main-dark)";
        //listName.style.paddingRight = "10px";
        listName.textContent = `${post.title} by ${post.username}`;
        listName.style.flexBasis = "100%";
        listName.style.fontSize = "30px";
        listName.style.fontWeight = "bolder";
        section.appendChild(listName);

        const publicPost = document.createElement("p");
        publicPost.id = "publicPost"
        publicPost.textContent = `${post.content}`;
        section.appendChild(publicPost); 
        publicPost.style.fontSize = "20px";
        

        sectionElements.push(section);
});