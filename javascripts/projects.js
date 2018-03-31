
const writeToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const createProjectCards = (projectsArray) => {
    let domString = "";
    projectsArray.forEach((projects) => {
        // domString += `<div class = "project" id="project-'+ (i+1) +'">`;
        domString +=   `<div class="project">`
        domString +=   `<h3>${projects.title}</h3>`;
        domString +=   `<img class="image" src="${projects.imageUrl}">`;
        domString +=   `<p>${projects.description}</p>`;
        domString +=   `<a href="">View project</a>`;
        domString += `</div>`
    });
    writeToDom(domString, "projects");       
};
  
function executeThisFunctionAfterFileLoads (){
  const data = JSON.parse(this.responseText);
  createProjectCards(data.projects);
}

function WTF(){
  console.log('Oops! Something went wrong');
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
  myRequest.addEventListener("error", WTF);
  myRequest.open("GET", "javascripts/db/projects.json");
  myRequest.send();
};

startApplication();