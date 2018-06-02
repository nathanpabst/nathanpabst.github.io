const writeToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

const createProjectCards = (projectsArray) => {
  let domString = '';
  projectsArray.forEach((projects) => {
    // domString += `<div class = "project" id="project-'+ (i+1) +'">`;
    domString +=   `<div class='project'>`;
    domString +=   `<h3>${projects.title}</h3>`;
    domString +=   `<img class="image" src="${projects.imageUrl}">`;
    domString +=   `<p>${projects.description}</p>`;
    domString +=   `<a href=''>View project</a>`;
    domString += `</div>`;
  });
  writeToDom(domString, 'projects');
};

const createBlogPosts = (myBlogsArray) => {
  let domString = '';
  myBlogsArray.forEach((blogs) => {
    domString += `<div id="blog-'+ (i+1) +'">`;
    domString +=   `<h3>${blogs.title}</h3>`;
    domString +=   `<h4>${blogs.date}</h4>`;
    domString +=   `<p>${blogs.post}</p>`;
    domString += `</div>`;
  });
  writeToDom(domString, 'blogs');
};