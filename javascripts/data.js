const blogs = require('./blogs');
const printBlogPosts = require('./blogDom');

const initializer = () => {
  blogs.loadAllBlogs().then((data) => {
    $('#blogs').append(printBlogPosts(data.blogPosts));
  }).catch((error) => {
    console.error('error', error);
  });
};

module.exports = {
  initializer,
};
