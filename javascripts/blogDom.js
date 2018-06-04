const printBlogPosts = (blogPosts) => {
  let output = '';
  blogPosts.forEach((post) => {
    output +=   `<div class="post">
    output +=     <h2>${blogPosts.title}</h2>
    output +=     <p>${blogPosts.post}</p>
    output +=   </div>
    output +=   <p class="byline"><span class="date">${blogPosts.date}</span></p>
    output += </div>`;
  });
  printToDom(output);
};

const printToDom = (posts) => {
  $('.post').html(posts);
};

module.exports = {
  printBlogPosts,
};
