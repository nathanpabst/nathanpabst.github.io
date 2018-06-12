let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
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
    $.ajax(`${firebaseConfig.databaseURL}/projects`)
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
};
