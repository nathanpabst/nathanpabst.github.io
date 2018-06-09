const {getAllBlogs,} = require('./firebaseApi');
const {printBlogPosts,} = require('./blogDom');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((blogsArray) => {
      printBlogPosts(blogsArray);
    })
    .catch((error) => {
      console.error('error in retrieving blogs', error);
    });
};

module.exports = {
  getAllBlogsEvent,
};
