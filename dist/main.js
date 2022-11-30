import data from "./data.js";

// GET DOM ELEMENTS
const blogList = document.querySelector("#blog-list");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeBlog")
let blogData = data.data;

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showBlogs);
blogList.addEventListener("click", openBlog)
closeModal.addEventListener("click", closeBlog);

function showBlogs() {
  for (let i = 0; i < blogData.length; i++) {
    const aLink = document.createElement("a");
    aLink.setAttribute("id", blogData[i].id);
    aLink.setAttribute("href", "./blog.html")
    aLink.classList.add(
      "post",
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

    aLink.innerHTML = `
          <img src="${blogData[i].image}"  class="w-full  lg:w-80 h-40 md:h-full object-cover object-center shadow" alt="" />
          <div class="blog-post w-full px-4 md:px-10 py-4 order-last lg:order-last">
              <button class="bg-gray-100 text-gray-500 text-xs font-semibold px-4 py-2 rounded-md  mb-3">Data Base</button>
              <h1 class="text-xl md:text-2xl font-bold curser-pointer capitalize hover:underline">
              ${blogData[i].title}
              </h1>
              <p class="mt-5  text-sm md:text-lg lg:text-base   text-stone-500">
              ${blogData[i].body}
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
    blogList.appendChild(aLink);
  }
}



// open blog post
function openBlog(e) {
    e.preventDefault();
    if(e.target.parentElement.classList.contains("blog-post")) {
       let post = e.target.parentElement.parentElement
       const postId = parseInt(post.id)

       const singlePost = blogData.filter((item) => {
        return item.id === postId
       })

       modal.classList.remove('hidden')
       let div = document.createElement("div");

       div.setAttribute("id", singlePost[0].id);
       div.classList.add(
        "post",
        "mt-8",
        "h-full",
         "p-6",
         "bg-white",
         "rounded-3xl",
         "shadow-md",
       );

       div.innerHTML = `
     <div id="${singlePost[0].id}" class="">
     <img src="${singlePost[0].image}"  class="w-full rounded-xl  lg:w-80 h-40 md:h-full object-cover object-center" alt="" />
     <div class="p-2">
     <h1 class="text-2xl font-bold text-gray-800 my-4">${singlePost[0].title}</h1>
     <p class="mt-6 text-sm md:text-base">${singlePost[0].body}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, rerum. Incidunt iusto numquam, quibusdam a maiores facere at sequi eum repellendus perspiciatis? Obcaecati molestiae dolor quam, culpa eius temp
</p>
     </div>
   </div>

     `;
       modal.appendChild(div);

    //    console.log(singlePost[0])
    }
}

// close  blog post
function closeBlog() {
    modal.classList.add('hidden')
    let child = modal.children[1]
    modal.removeChild(child)
}