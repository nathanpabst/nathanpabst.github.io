const printBlogPosts = (blogPosts) => {
  let output = '';
  blogPosts.forEach((post) => {
    output += `<div id="blog-'+ (i+1) +'">`;
    output +=   `<h3>${blogPosts.title}</h3>`;
    output +=   `<h4>${blogPosts.date}</h4>`;
    output +=   `<p>${blogPosts.post}</p>`;
    output += `</div>`;
  });
  return output;
};

module.exports = {
  printBlogPosts,
};
