const form = document.getElementById("post-form");
const input = document.getElementById("post-input");
const postLists = document.getElementById("post-lists");

//
let postItem = [
  {
    id: 1,
    content:
      "My favorite Alysa Liu interview moment was when a reporter asked her why she commented/talked about Eileen Gu (a snowboarder who she grew up with and has known for years but who competed for China instead of America) and her response was smth like “because I was asked” 😭😭",
    likes: 140,
    replies: 83,
    timestamp: "1d ago",
    user: {
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.18ODAlp4zaE6B4yH1sBlgwHaHa%3Fpid%3DApi&f=1&ipt=4a035d84c89438064e0c8337cd446d11c079db7797618cfc69804b480673ba18&ipo=images",
      name: "Eve",
      username: "@eevvvee",
    },
  },
  {
    id: 2,
    content:
      "IShowSpeed is one of the biggest and most entertaining streamers in the world, known for his insane energy, loud reactions, and completely unpredictable personality that turned him from a small YouTuber into a global superstar 🤯🔥 born in the US, he first blew up with viral gaming streams, but quickly expanded into music, football content, and real-life streams across different countries where huge crowds show up just to see him ⚡ he’s famous for his obsession with Cristiano Ronaldo, hitting the iconic “SIUUU,” and creating nonstop chaotic, funny, and hype moments that keep millions of fans watching every move 👇 if you like wild reactions, viral energy, and content where anything can happen, you’re in the right place 🚀",
    likes: 432,
    replies: 325,
    timestamp: "3h ago",
    user: {
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.MYLcZkdXa3GiQ1lEdp2OZAHaIU%3Fr%3D0%26pid%3DApi&f=1&ipt=5724546345fe5b56987851a877238f9044bb52a9836c98e997a2e4edf895b587&ipo=images",
      name: "Facts Archive",
      username: "@facts",
    },
  },
];

let postStorage = localStorage.getItem("posts");

if (postStorage === null) {
  localStorage.setItem("posts", JSON.stringify(postItem));
} else {
  postItem = JSON.parse(localStorage.getItem("posts"));
}

// Render Post
const renderPost = () => {
  let postHtml = "";

  let sortedItem = postItem.sort((a, b) => b.id - a.id);

  sortedItem.map((item) => {
    return (postHtml += `
          <!-- Posts -->
          <div key={${item.id}} class="flex gap-3 border-b border-neutral-800 px-4 py-3">
            <div class="">
              <div class="size-10 rounded-full bg-white overflow-hidden">
              <img
                src="${item.user.avatar}"
                class="object-cover h-full w-full"
                alt=""
              />
              </div>
            </div>
            <div class="space-y-2">
              <!-- Post Creator -->
              <div class="flex gap-2 text-sm items-center text-neutral-500">
                <h3 class="text-neutral-200 font-medium">
                  ${item.user.name}
                </h3>
                <h3 class="">${item.user.username}</h3>
                <span>&bull;</span>
                <h3>${item.timestamp}</h3>
              </div>
              <!-- Post Content -->
              <div>
                <p class="text-sm">
                  ${item.content}
                </p>
              </div>
              <!-- Post Reaction -->
              <div class="flex gap-3 text-neutral-500">
                <div class="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart-icon lucide-heart"
                  >
                    <path
                      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    />
                  </svg>
                  <span class="text-xs">${item.likes}</span>
                </div>
                <div class="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-message-square-text-icon lucide-message-square-text"
                  >
                    <path
                      d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                    />
                    <path d="M7 11h10" />
                    <path d="M7 15h6" />
                    <path d="M7 7h8" />
                  </svg>
                  <span class="text-xs">${item.replies} replied</span>
                </div>
              </div>
            </div>
          </div>
            `);
  });
  postLists.innerHTML = postHtml;
};

renderPost();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = input.value;
  if (inputVal !== "") {
    const newPost = {
      id: Date.now(),
      content: inputVal,
      likes: 0,
      replies: 0,
      timestamp: "4s ago",
      user: {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.3NoIQmOqCodp08f28pWIWwHaJ4%3Fcb%3Dthfc1falcon2%26pid%3DApi&f=1&ipt=bbca61387c868b21908f6dc0ddd41b9ba43d688d44b2257b14c01904f7c42eef&ipo=images",
        name: "Jeffrey Coleman Jr",
        username: "@jeffreyjr",
      },
    };

    postItem.push(newPost);
    localStorage.setItem("posts", JSON.stringify(postItem));
    renderPost();

    form.reset()
  } else {
    alert("Fill your content correctly.");
  }
});
