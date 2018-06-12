const printProjects = (projectsArray) => {
  let output = '';
  projectsArray.forEach((project) => {
    output += `<div class="projects">
                <h3>${project.title}</h3>
                <img class="image" src="${project.thumbnail}">
                <p>${project.description}</p>
                <p>${project.technologiesUsed}</p>
                <a href="${project.url}">View Project</a>
                <a href="${project.githubUrl}">GitHub Repository</a>
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
