const writeToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const createBlogPosts = (myBlogsArray) => {
    let domString = "";
    myBlogsArray.forEach((blogs) => {
        domString += `<div id="blog-'+ (i+1) +'">`;
        domString +=   `<h3>${blogs.title}</h3>`;
        domString +=   `<h4>${blogs.date}</h4>`;
        domString +=   `<p>${blogs.post}</p>`;
        domString += `</div>`
    });           
    writeToDom(domString, "blogs");
};

function executeThisFunctionAfterFileLoads (){
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}

function WTF(){
    console.log('Oops! Something went wrong.');
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "javascripts/db/blogs.json");
    myRequest.send();
};

startApplication();