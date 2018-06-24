const printJobs = (jobsArray) => {
  let output = '';
  jobsArray.forEach((jobs) => {
    output +=   `<div class="job">
                  <h2>${jobs.role}</h2>
                  <p><span class="date">${jobs.dates}</span></p>
                  <h3>${jobs.company}</h3>
                  <p>${jobs.summary1}</p>
                  <p>${jobs.summary2}</p>
                  <p>${jobs.summary3}</p>
                </div>`;
  });
  printToDom(output);
};

const printToDom = (jobs) => {
  $('#jobsSection').html(jobs);
};

module.exports = {
  printJobs,
};
