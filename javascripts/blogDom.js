const printBlogPosts = (posts) => {
  let output = '';
  posts.forEach((post) => {
    output +=   `<div class="post">`;
    output +=     `<h2>${post.title}</h2>`;
    output +=     `<p>${post.post}</p>`;
    output +=     `</div>`;
    output +=     `<p class="byline"><span class="date">${post.date}</span></p>`;
    output +=   `</div>`;
  });
  printToDom(output);
};

const printToDom = (posts) => {
  $('.post').html(posts);
};

module.exports = {
  printBlogPosts,
};
