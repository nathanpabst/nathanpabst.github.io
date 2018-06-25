const {getAllBlogs, getAllProjects, getAllJobs, getEducation,} = require('./firebaseApi');
const {printBlogPosts,} = require('./blogDom');
const {printProjects,} = require('./projectsDom');
const {printJobs, printEdu,} = require('./jobsDom');

const getEducationEvent = () => {
  getEducation()
    .then((educationArray) => {
      printEdu(educationArray);
    })
    .catch((error) => {
      console.error('error in retrieving education', error);
    });
};
const getAllJobsEvent = () => {
  getAllJobs()
    .then((jobsArray) => {
      printJobs(jobsArray);
    })
    .catch((error) => {
      console.error('error in retrieving jobs', error);
    });
};

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
  getAllJobsEvent,
  getEducationEvent,
};
