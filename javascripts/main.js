const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogsEvent, getAllProjectsEvent, getAllJobsEvent,} = require('./events');

const initializer = () => {
  retrieveKeys().then(() => {
    getAllBlogsEvent();
    getAllProjectsEvent();
    getAllJobsEvent();
  });
};

initializer();

module.exports = {
  initializer,
};
