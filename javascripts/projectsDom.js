const printProjects = (projectsArray) => {
  let output = '';
  projectsArray.forEach((project) => {
    output += `<div class="col-sm-4 projects">
                <div class="thumbnail">
                  <h2 class="text-center">${project.title}</h2>
                  <img class="image" src="${project.thumbnail}">
                  <p>ABOUT: ${project.description}</p>
                  <p>TECHNOLOGIES USED:${project.technologiesUsed}</p>
                  <p><a class="projectBtns" href="${project.url}" target="blank">View Project</a>
                  <a class="projectBtns" href="${project.githubUrl}"target="blank">GitHub Repository</a></p>
                </div>
              </div>`;
  });
  printToDom(output);
};

const printToDom = (projects) => {
  $('#projects').html(projects);
};

module.exports = {
  printProjects,
};
