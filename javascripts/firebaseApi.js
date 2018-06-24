let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    const jobsArray = [];
    $.ajax(`${firebaseConfig.databaseURL}/jobs.json`)
      .done((allJobsObj) => {
        if (allJobsObj !== null) {
          Object.keys(allJobsObj).forEach((fbKey) => {
            allJobsObj[fbKey].id = fbKey;
            jobsArray.push(allJobsObj[fbKey]);
          });
        }
        resolve(jobsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const blogsArray = [];
    $.ajax(`${firebaseConfig.databaseURL}/blogPosts.json`)
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            blogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(blogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const projectsArray = [];
    $.ajax(`${firebaseConfig.databaseURL}/blogPosts/projects.json`)
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            projectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(projectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogs,
  getAllProjects,
  getAllJobs,
};
