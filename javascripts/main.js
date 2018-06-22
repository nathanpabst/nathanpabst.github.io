const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogsEvent, getAllProjectsEvent,} = require('./events');

const initializer = () => {
  retrieveKeys().then(() => {
    getAllBlogsEvent();
    getAllProjectsEvent();
  });
};

initializer();

module.exports = {
  initializer,
};
