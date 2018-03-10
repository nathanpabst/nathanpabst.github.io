
var projects = [
    {
      id: "project-1", 
      title: "Boulder", 
      imageUrl: "images/Boulder.jpeg",  
      description: "This is the best project",
      githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html" 
    },
    {
        id: "project-2", 
        title: "Chicago", 
        imageUrl: "images/chicago.jpeg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html"
    },
      {
        id: "project-3", 
        title: "Kansas City", 
        imageUrl: "images/kansas_city.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html"
      },
      {
        id: "project-4", 
        title: "Los Angeles", 
        imageUrl: "images/Los-Angeles.jpeg",
        description: "This is the best project",
        githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html"
      },
      {
        id: "project-5", 
        title: "Nashville", 
        imageUrl: "images/nashville.jpeg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html"
      },
      {
        id: "project-6", 
        title: "Portland", 
        imageUrl: "images/portland.jpeg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nathanpabst/nathanpabst.github.io/blob/master/Projects.html"
      }
  ];

//   Create two functions:
//   writeToDom: this function should accept a string and print it to a div with an id of my-projects
//   createProjectCards: this function should loop through the projects array and build up the html that you have on your projects page. It should call the writeToDom function for each project.
//   The last line of this file should be: createProjectCards(); 
 
function writeToDom(domString, domId){
    var myDiv = document.getElementById(domId);
    myDiv.innerHTML += domString;
}

function createProjectCards(myProjects){
    for(var i = 0; i < myProjects.length; i++){
        var projectString = "";
           projectString += '<div class = "project" id="project-'+ (i+1) +'">'
           projectString +=   '<h3>' + myProjects[i].title + '<h3>';
           projectString +=   '<img src="' + myProjects[i].imageUrl + 
           '" width="300px">';
           projectString +=   '<p>' + myProjects[i].description + '<p>';
           projectString +=   '<a href="">View project</a>'
           projectString += '</div>'
        writeToDom(projectString, "projects");
    }
}    
createProjectCards(projects);