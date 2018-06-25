const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogsEvent, getAllProjectsEvent, getAllJobsEvent, getEducationEvent,} = require('./events');

const initializer = () => {
  retrieveKeys().then(() => {
    getAllBlogsEvent();
    getAllProjectsEvent();
    getAllJobsEvent();
    getEducationEvent();
  });
};

initializer();

module.exports = {
  initializer,
};
