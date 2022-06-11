 // -----------Preloader------------
 const preloader=document.querySelector('#preloader');

 let load=()=>{
   preloader.style.display='none';
 }      

 // -------------NAVBAR------------
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
document.getElementById("navbar").style = "background-color: #BEE966;box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;";
document.querySelector("#navbar h1").style.color = "#fefefe";
document.querySelectorAll("#navbar a").forEach(element => {
 element.style.color = "#fefefe";
});

} else {
document.querySelector("nav h1").style.color = "#4B5D67";
document.getElementById("navbar").style = "background-color:#fefefe;box-shadow: none;";
document.querySelectorAll("#navbar a").forEach(element => {
 element.style.color = "#4B5D67";
});
 }
}
// -------------Typewriter------------
// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");
const textArray = ["simple", "fast", "effective!"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 250; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
if (charIndex < textArray[textArrayIndex].length) {
if(!document.querySelector(".cursor").classList.contains("typing")) 
document.querySelector(".cursor").classList.add("typing");
document.querySelector(".typed-text").textContent += textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingDelay);
} 
else {
document.querySelector(".cursor").classList.remove("typing");
 setTimeout(erase, newTextDelay);
}
}

function erase() {
if (charIndex > 0) {
if(!document.querySelector(".cursor").classList.contains("typing")) document.querySelector(".cursor").classList.add("typing");
document.querySelector(".typed-text").textContent = textArray[textArrayIndex].substring(0, charIndex-1);
charIndex--;
setTimeout(erase, erasingDelay);
} 
else {
document.querySelector(".cursor").classList.remove("typing");
textArrayIndex++;
if(textArrayIndex>=textArray.length) textArrayIndex=0;
setTimeout(type, typingDelay + 1100);
}
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
if(textArray.length) setTimeout(type, newTextDelay + 250);
});