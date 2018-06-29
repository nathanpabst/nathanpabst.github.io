const printEdu = (educationArray) => {
  let output = '';
  output += `<h2 class="edu">Education</h2>`;
  educationArray.forEach((school) => {
    output += `<div class="schools">
                <h2 class="schoolName">${school.name}</h2>
                <p>${school.dates}</p>
                <p>${school.achievement}</p>
                <hr></hr>
              </div>`;
  });
  printIt(output);
};

const printJobs = (jobsArray) => {
  let output = '';
  output += `<h2 class="workExperience">Previous Work Experience</h2>`;
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

const printToDom = (jobs) => {
  $('.jobsSection').html(jobs);
};

const printIt = (schools) => {
  $('.educationSection').html(schools);
};

module.exports = {
  printJobs,
  printEdu,
};
