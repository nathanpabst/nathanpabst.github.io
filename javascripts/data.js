const blogs = require('./blogs');
const printBlogPosts = require('./blogDom');

const firebaseKey = '';

const setKey = (key) => {
  firebaseKey = key;
};

const setAllBlogPosts = () => {
  blogs.loadAllBlogs().then((data) => {
    $('.post').append(printBlogPosts(data.blogPosts));
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
