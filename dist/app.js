// GET DOM ELEMENTS
import data from './data.js'
const blogList = document.querySelector("#blog-list");
const closeMobile = document.querySelector("#closeMobile");
const mobileNav = document.querySelector("#mobileNav");
const navMenu = document.querySelector("#hambugger");
const modal = document.querySelector("#modal");
// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showBlogs);
navMenu.addEventListener("click", showMobileNav);
closeMobile.addEventListener("click", closeMobileNav);
blogList.addEventListener("click", openSingleBlog);

// FUNCTIONS

fetch(data)
.then((res) => { res.json()})
.then((data) => {
  console.log(data)
})

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
      let post = posts.slice(70, 84);
      console.log(post);

      for (let i = 3; i < post.length; i++) {
        if (post[i].body.length >= 20) {
          // create a div
          const div = document.createElement("div");
          div.setAttribute("id", post[i].id);
          div.classList.add(
            "blogPost",
            "w-full",
            "bg-white",
            "rounded-xl",
            "shadow-md",
            "hover:shadow-xl",
            "lg:flex",
            "mt-8",
            "transform",
            "transition",
            "ease-in",
            "hover:-translate-y-1",
            "overflow-hidden"
          );
          div.innerHTML = `
          <img src="./images/yellow-white.jpg"  class="w-full  lg:w-80 h-60 md:h-full object-cover object-center shadow" alt="" />
          <div class="w-full px-4 md:px-10 py-4 order-last lg:order-last">
              <button class="bg-gray-100 text-gray-800 text-xs font-semibold px-4 py-2 rounded-md  mb-3">Data Base</button>
              <h1 class="text-2xl font-bold curser-pointer capitalize hover:underline">
              ${posts[i].title}
              </h1>
              <p class="mt-5 text-lg lg:text-base   text-stone-500">
              ${post[i].body}
              </p>


              <div class="mt-8 flex">
                <img src="./images/tadmall.jpg" class="object-cover object-center w-12 h-12 rounded-full shadow-md" alt="">

                <div class="pl-4">
                  <h4 class="text-base text-stone-500 font-bold">WestCode East</h4>
                  <p class="text-sm text-gray-500 mt-2">Jan 17, 2022. <span>3min</span></p>
                </div>
              </div>
          </div>
            `;

          blogList.appendChild(div);
        }
      }
    });
}

// openSingleBlog
function openSingleBlog(e) {
  e.preventDefault();
  const modalList = document.querySelector("#modal-list");
  if (e.target.parentElement.parentElement.classList.contains("blogPost"))
  {
    let element = e.target.parentElement.parentElement;
    let elementId = parseInt(element.id);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        let post = posts.slice(70, 84);
        console.log(post);
        let singlePost = post.filter((item) => {
          return item.id === elementId;
        });

        modal.classList.remove("hidden");
        let div = document.createElement("div");

        div.setAttribute("id", singlePost[0].id);
        div.classList.add(
          "h-full",
          "bg-white",
          "fixed",
          "top-0",
          "w-full",
          "z-10",
          "flex",
          "justify-center",
          "px-4",
        );

        div.innerHTML = `
      <div id="${singlePost[0].id}" class="bg-white w-full mt-10">
      <div class="bg-black p-6 flex items-center justify-end">
        <button onclick="closeModal()" class="text-2xl text-white font-semibold">X</button>
      </div>
      <img src="./images/yellow-white.jpg"  class="w-full  lg:w-80 h-60 md:h-full object-cover object-center shadow" alt="" />
      <div class="p-2">
      <h1 class="text-xl font-bold text-gray-800 my-4">${singlePost[0].title}</h1>
      <p class="mt-6">${singlePost[0].body}</p>
      </div>
    </div>

      `;
        modal.appendChild(div);

        let tempList = post.filter((item) => {
          return item.id !== elementId;
        });
      });
  }
}

function closeModal() {
  modal.classList.add("hidden")
}

// console.log(data)
