
const writeToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
    myDiv.innerHTML += domString;
};

const createProjectCards = (projectsArray) => {
    var domString = "";
    projectsArray.forEach((project) => {
        domString += `<div class = "project" id="project-'+ (i+1) +'">`;
        domString +=   `<h3>${projects.title}</h3>`;
        domString +=   `<img src="'${projects.imageUrl} + 
          '" width="300px">`;
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
  myRequest.open("GET", projects.json);
  myRequest.send();
}

startApplication();