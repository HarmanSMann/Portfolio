// Example blog.js for dynamically fetching blog posts
document.addEventListener("DOMContentLoaded", function () {
    // Fetch blog posts from your server or API
    // Example using dummy data
    const blogPosts = [
      {
        title: "Post 1",
        date: "November 1, 2023",
        content: "Just made this site",
      },
      // Add more blog posts as needed
    ];
  
    const blogContainer = document.querySelector(".blog-scroll-container");
  
    // Append each blog post to the container
    blogPosts.forEach((post) => {
      const postElement = document.createElement("article");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <header>
          <h3>${post.title}</h3>
          <p class="blog-date">${post.date}</p>
        </header>
        <p>${post.content}</p>
      `;
      blogContainer.appendChild(postElement);
    });
  });

  
  