const loadAllBlogs = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/blogs.json')
      .done((data) => {
        resolve(data.blogPosts);
      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

module.exports = {
  loadAllBlogs,
};
