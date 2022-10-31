// GET DOM ELEMENTS
const blogPosts = document.querySelector(".todo-list");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showBlogs);

// FUNCTIONS

function showBlogs() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      let blogPost;
      let post = posts.slice(70, 77);
      for (let i = 3; i < post.length; i++) {
        if (post[i].body.length >= 20) {
          let postBody = post[i].body.slice(0, 90);

          blogPost += `


          <div class="w-full bg-white rounded-xl shadow-xl hover:shadow-md flex flex-col md:flex-row mt-8 transform transition ease hover:-translate-y-1">
          <img src="./images/hero.jpg" class="w-full md:w-1/3  object-cover object-center rounded-md" alt="" />
          <div class="px-6 md:px-10 py-4 order-last">
            <button class="bg-gray-200 text-gray-800 text-xs font-semibold px-4 py-2 rounded-md mb-4">Data Base</button>
            <a href="#" class="text-xl block font-bold hover:underline">
            ${posts[i].title}
            </a>
            <p class="my-4 text-sm text-gray-600">
            ${postBody}
            </p>


            <div class="mt-6 flex">
              <img src="./images/shoes.jpg" class="object-cover object-center w-12 h-12 rounded-full shadow-md" alt="">

              <div class="pl-4">
                <h4 class="text-sm text-gray-500 font-bold">WestCode East</h4>
                <p class="text-xs text-gray-500 mt-2">Jan 17, 2022. <span>3min</span></p>
              </div>
            </div>
          </div>
        </div>

            `;
        }
      }

      blogPosts.innerHTML += blogPost;
    });
}
