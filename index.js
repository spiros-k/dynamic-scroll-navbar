

const home = document.getElementById("home");
const rect = home.getBoundingClientRect();

const about = document.getElementById("about-us");
const rectTwo = home.getBoundingClientRect();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arrow").classList.add("hidden")
})

let previousPosition = window.scrollY || document.documentElement.scrollTop;

window.onscroll = function() {
    let currentPosition = scrollY || document.documentElement.scrollTop;
    let aInNav = document.querySelectorAll("#nav a")
    if(currentPosition > previousPosition) {
        document.getElementById("nav").classList.remove("nav-links");
        document.getElementById("nav").classList.add("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.add("new-a")
        }
        document.querySelector("h1").style.marginTop = "15%";
        document.getElementById("arrow").classList.remove("hidden")
    } else if(currentPosition == previousPosition || currentPosition < previousPosition) {
        document.getElementById("nav").classList.add("nav-links");
        document.getElementById("nav").classList.remove("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.remove("new-a")
        }
    }

}