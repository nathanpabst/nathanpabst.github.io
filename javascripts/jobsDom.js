const printTech = (techArray) => {
  let output = '';
  output += `<h2 class="techHeader text-center">Technologies Used</h2>`;
  techArray.forEach((tech) => {
    output += `<div class="col-md-3 col-xs-6 techBoxes text-center">
                <div class="logo-panel">
                  <img class="tech-icon" src="${tech.imgURL}">
                  <h3>${tech.name}</h3>
                </div>
                </div>
              </div>`;
  });
  printTechLogos(output);
};

const printEdu = (educationArray) => {
  let output = '';
  output += `<h2 class="edu text-center">Education</h2>`;
  educationArray.forEach((school) => {
    output += `<div class="schools">
                <h2 class="schoolName">${school.name}</h2>
                <p>${school.dates}</p>
                <p>${school.achievement}</p>
              </div>`;
  });
  printIt(output);
};

const printJobs = (jobsArray) => {
  let output = '';
  output += `<h2 class="workExperience text-center">Previous Work Experience</h2>`;
  jobsArray.forEach((jobs) => {
    output +=   `<div class="job">
                  <h2 class="jobTitle">${jobs.role}</h2>
                  <p class="companyName">${jobs.company} &nbsp ${jobs.dates}</p>
                  <p>Summary:</p>
                  <li class="summary">${jobs.summary1}</li>
                  <li class="summary">${jobs.summary2}</li>
                  <li class="summary">${jobs.summary3}</li>
                  <hr></hr>
                </div>`;
  });
  printToDom(output);
};

const printTechLogos = (tech) => {
  $('.techSection').html(tech);
};

const printToDom = (jobs) => {
  $('.jobsSection').html(jobs);
};

const printIt = (schools) => {
  $('.educationSection').html(schools);
};

module.exports = {
  printJobs,
  printEdu,
  printTech,
};
