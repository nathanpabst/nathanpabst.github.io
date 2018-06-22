const {getAllBlogs, getAllProjects,} = require('./firebaseApi');
const {printBlogPosts,} = require('./blogDom');
const {printProjects,} = require('./projectsDom');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((blogsArray) => {
      printBlogPosts(blogsArray);
    })
    .catch((error) => {
      console.error('error in retrieving blogs', error);
    });
};

const getAllProjectsEvent = () => {
  getAllProjects()
    .then((projectsArray) => {
      printProjects(projectsArray);
    })
    .catch((error) => {
      console.error('error in retrieving projects', error);
    });
};

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
};
