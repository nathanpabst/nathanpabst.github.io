const {retrieveKeys,} = require('./apiKeys');
const {getAllBlogsEvent,} = require('./events');

const initializer = () => {
  retrieveKeys().then(() => {
    getAllBlogsEvent();
  });
};

initializer();

module.exports = {
  initializer,
};
