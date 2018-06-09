const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogs,} = require('./firebaseApi');

const initializer = () => {
  retrieveKeys();
  getAllBlogs();
};

initializer();

module.exports = {
  initializer,
};
