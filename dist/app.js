// GET DOM ELEMENTS
const blogPosts = document.querySelector(".todo-list");
const closeMobile = document.querySelector("#closeMobile");
const mobileNav = document.querySelector("#mobileNav");
const navMenu = document.querySelector("#hambugger");




// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showBlogs);
navMenu.addEventListener("click", showMobileNav);

closeMobile.addEventListener("click", closeMobileNav);

// FUNCTIONS

function showMobileNav(e) {
  e.preventDefault();
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("slideIn");
  mobileNav.classList.remove("-left-full");
  mobileNav.classList.add("left-0");
}

function closeMobileNav(e) {
  e.preventDefault();
  mobileNav.classList.add("hidden");
}

function showBlogs() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      let post = posts.slice(70, 79);

      for (let i = 3; i < post.length; i++) {
        if (post[i].body.length >= 20) {
          let postBody = post[i].body.slice(0, 90);
          let blogPost = `
          <div class="w-full bg-white rounded-2xl shadow-md hover:shadow-md flex flex-col lg:flex-row mt-8 transform transition ease hover:-translate-y-1 p-4">
          <img src="./images/shoppers.jpg" class="w-full h-40 md:h-52 lg:h-full lg:w-1/3  object-cover object-center rounded-xl shadow-md" alt="" />
          <div class="px-4 md:px-2 lg:pl-8 py-4 order-last lg:order-last">
            <button class="bg-gray-200 text-gray-800 text-xs font-semibold px-4 py-2 rounded-md my-2">Data Base</button>
            <a href="#" class="text-xl md:text-2xl lg:text-3xl block font-bold hover:underline">
            ${posts[i].title}
            </a>
            <p class="my-4 text-sm md:text-base lg:text-md text-gray-600">
            ${postBody}
            </p>


            <div class="mt-6 flex">
              <img src="./images/tadmall.jpg" class="object-cover object-center w-10 h-10 rounded-full shadow-md" alt="">

              <div class="pl-4">
                <h4 class="text-sm text-gray-500 font-bold">WestCode East</h4>
                <p class="text-xs text-gray-500 mt-2">Jan 17, 2022. <span>3min</span></p>
              </div>
            </div>
          </div>
        </div>

            `;
          blogPosts.innerHTML += blogPost;
        }
      }
    });
}
