const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogsEvent, getAllProjectsEvent, getAllJobsEvent, getEducationEvent, getTechnologiesEvent,} = require('./events');

const initializer = () => {
  retrieveKeys().then(() => {
    getAllBlogsEvent();
    getAllProjectsEvent();
    getAllJobsEvent();
    getEducationEvent();
    getTechnologiesEvent();
  });
};

initializer();

module.exports = {
  initializer,
};
