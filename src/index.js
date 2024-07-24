const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
//the functions
import "./styles/style.css";
import home from "./home";
import menu from './menu';
import about from './about';


console.log("Hello World");

//callings
// home();
// menu();
about();
homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
