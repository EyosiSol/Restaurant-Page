const container = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
//the functions
import home from "./home"


function menu() {
  container.innerHTML = "This is the menu page";

}
function about() {
  container.innerHTML = "This is the about page";
}
console.log("Hello World");

//callings
home();
homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
