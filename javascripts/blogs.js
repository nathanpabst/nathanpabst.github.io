var blogs = [
    {
        id: "blog1",
        title: "Week One",
        date: "02/27/2018",
        post: "Our focus this week, in addition to HTML and CSS, was the Command Line and GitHub. Truth be told, I didn't know either existed until a few months ago. So needlesss to say, it has been an eye-opening seven days. The Command Line...whoa. I thought we were past the black-screen DOS days, but I'm learning that it is actually a very powerful tool that offers more control, access to applications that are otherwise unavailable, and the ability to control the mind of servers through scripts. I also learned a few funny acronyms like 'man command', 'touch' and 'mkdir'. It's not a folder, Bill... It's a directory! We can't and won't let you win this battle. ...GitHub... HTML is my pal and I'm beginning to understand how to name and contain the elements so that they can be styled later, but CSS--and more specifically--positioning elements on a page is seemingly the end of me." 
    },
    {
        id: "blog2",
        title: "Week Two",
        date: "03/06/2018",
        post: "Over the past 7 days we've begun learning about strings, conditional statements, arrays, for loops, and objects. <em>Strings</em> There are 6 primative types of strings including: strings, numbers, boolean, null, undefined, and objects--which also include arrays and lists. We learned several new methods to use alongside strings like: indexOf(), replace(), join() and split(), how to concatenate strings, and how to test our code using the console before connecting our JavaScript to the DOM. <em>Conditional Statements</em>: These statements include: if, if else, and else and were properly drilled into my brain from the pre-work. <em>Arrays</em> Arrays are like storage bins that you can hold strings, numbers, and booleans. Through our presentations and challenges, we covered several basic array methods for example: pop()--which removes a value from the end of the array and push()-which adds a value to the beginning of an array. <em>For Loops</em> For loops include 3 parts: the starting value, the stopping value,and how to increment the loop. I was pretty comfortable with these too as a result of the pre-work. This week was incredibly challenging for me. To say that I feel behind the curve, I think, would be an understatement. The best way to describe this week is to say that it's been humbling, overwhelming, and frustrating. With that said, I also understand that this is a 'bootcamp' and is intended to break people again and again in order to adequately prepare them for real-world experience. I also believe that these concepts will sink in as I get more training and more time passes. One thing I found very interesting this week, is that you can solve a problem in any number of ways, but there is definitely a 'wrong answer'. Looking forward to week 4."
    },
    {
        id: "blog3",
        title: "Week Three",
        date: "03/12/18",
        post: "This week we covered advanced JavaScript and GitHub for teams. Functions are starting to make a little more sense. Although, I still get hung up on small issues like naming the variables and parameters. We also watched Zoe, Callan, and Lauren use GitHub to create and manage a project, which was pretty cool. I learned how to work with a team to plan a project and then use GitHub as a project management tool. For example, creating a project, adding issues and styling tickets to include the story, acceptance criteria, and technical notes. For our group project, we only did the planning stage together. Next week we will begin splitting tickets among the team and reviewing each others work, which should be very interesting." 

    },
]
// Create two functions:
// writeToDom: this function should accept a string and print it to a div with an id of my-projects
// createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog. It should call the writeToDom function for each blog.
function writeToDom(domString, domId){
    var myDiv = document.getElementById(domId);
    myDiv.innerHTML += domString;
}
function createBlogPosts(myBlogs){
    for(var i = 0; i < myBlogs.length; i++){
        var blogsString = "";
           blogsString += '<div id="blog-'+ (i+1) +'">'
           blogsString +=   '<h3>' + myBlogs[i].title + '</h3>';
           blogsString +=   '<h4>' + myBlogs[i].date + '</h4>';
           blogsString +=   '<p>' + myBlogs[i].post + '</p>';
           blogsString += '</div>'
        writeToDom(blogsString, "blogs");
    }
}    
createBlogPosts(blogs);