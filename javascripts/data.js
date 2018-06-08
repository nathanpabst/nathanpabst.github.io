// const blogs = require('./blogs');
const blogDom = require('./blogDom');

// const firebaseKey = '';

// const setKey = (key) => {
//   firebaseKey = key;
// };

const setAllBlogPosts = () => {
  firebaseApi.getAllBlogs()
  .then((blogsArray) => {
    blogDom.printBlogPosts();
  }).catch((error) => {
    console.error('error', error);
  });
};

const initializer = () => {
  setAllBlogPosts();
};

module.exports = {
  initializer,
  setKey,
};
