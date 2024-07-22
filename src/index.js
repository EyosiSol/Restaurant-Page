const container = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");

//the functions

function home() {
  const videoDiv = document.createElement("div");
  const scrollable = document.createElement("div");

  videoDiv.className = "video";

  videoDiv.innerHTML =
    '<video src="https://framerusercontent.com/modules/assets/KNjmnFp5kwda6KegO13wieYyI0~X8VYXNZqrM3GjnnMxrYu-UFwPJWSO_wIyhsPF4HsDlE.mp4" loop autoplay></video>';

  scrollable.className = "scrollable";
  scrollable.innerHTML =
    '<div class="home"><img src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp" alt=""></div><div class="reservation"><img src="https://framerusercontent.com/images/slPotYXPFXAfEsa1a4GJhZIk.webp" alt=""></div><div class="aboutUs"><img src="https://framerusercontent.com/images/InB1qO4eodYHQXKOVBszhLURHE.webp" alt=""></div>';

  container.appendChild(videoDiv);
  container.appendChild(scrollable);
}

function menu() {
  container.innerHTML = "";
}

console.log("Hello World");

//callings
home();
homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
