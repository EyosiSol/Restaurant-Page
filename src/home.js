const container = document.getElementById('content');

export default function home() {
    container.innerHTML = "";
    const videoDiv = document.createElement("div");
    const righthome = document.createElement("div");
  
    videoDiv.className = "video";
  
    videoDiv.innerHTML =
      '<video src="https://framerusercontent.com/modules/assets/KNjmnFp5kwda6KegO13wieYyI0~X8VYXNZqrM3GjnnMxrYu-UFwPJWSO_wIyhsPF4HsDlE.mp4" loop autoplay></video>';
  
    righthome.className = "right home";
    righthome.innerHTML =
      '<div class="home"><img src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp" alt=""></div><div class="reservation"><img src="https://framerusercontent.com/images/slPotYXPFXAfEsa1a4GJhZIk.webp" alt=""></div><div class="aboutUs"><img src="https://framerusercontent.com/images/InB1qO4eodYHQXKOVBszhLURHE.webp" alt=""></div>';
  
    container.appendChild(videoDiv);
    container.appendChild(righthome);
  }