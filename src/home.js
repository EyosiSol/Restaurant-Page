const container = document.getElementById('content');

export default function home() {
    container.innerHTML = "";
    const videoDiv = document.createElement("div");
    const righthome = document.createElement("div");
    const home = document.createElement("div");

    home.className = "home";

    videoDiv.className = "video";
    videoDiv.innerHTML = '<video src="https://framerusercontent.com/modules/assets/KNjmnFp5kwda6KegO13wieYyI0~X8VYXNZqrM3GjnnMxrYu-UFwPJWSO_wIyhsPF4HsDlE.mp4" loop autoplay style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;"></video>'
    
    righthome.className = "righthome";
    righthome.innerHTML =
      '<div class="menu"><button id="menu">MENU</button></div><div class="reservation"><button id ="reservation">RESERVATION</button></div><div class="aboutUs"><button id="about">ABOUT US</button></div>';
  
    home.appendChild(videoDiv);
    home.appendChild(righthome);

    container.appendChild(home);
  }

