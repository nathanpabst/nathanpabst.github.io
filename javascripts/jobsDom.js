const printJobs = (jobs) => {
  let output = '';
  jobs.forEach((job) => {
    output +=   `<div class="job">
                  <h2>${job.role}</h2>
                  <p><span class="date">${job.dates}</span></p>
                  <h3>${job.company}</h3>
                  <p>${job.summary1}</p>
                  <p>${job.summary2}</p>
                  <p>${job.summary3}</p>
                </div>`;
  });
  printToDom(output);
};

const printToDom = (jobs) => {
  $('.jobs').html(jobs);
};

module.exports = {
  printJobs,
};
