
let previousPosition = document.documentElement.scrollTop || window.scrollY;
console.log(previousPosition);


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arrow").classList.add("hidden");

    previousPosition = 0;
    let aInNav = document.querySelectorAll("#nav a");
    if( previousPosition > 0) {
        document.getElementById("nav").classList.remove("nav-links");
        document.getElementById("nav").classList.add("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.add("new-a");
        }
        document.querySelector("h1").style.marginTop = "15%";
        document.getElementById("arrow").classList.remove("hidden");
    } else if(previousPosition === 0 || previousPosition < 0) {
        document.getElementById("nav").classList.add("nav-links");
        document.getElementById("nav").classList.remove("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.remove("new-a");
        }
    }
})



window.onscroll = function() {    
    
    let currentPosition = document.documentElement.scrollTop || scrollY; 
    let aInNav = document.querySelectorAll("#nav a");
    if(currentPosition > previousPosition) {
        document.getElementById("nav").classList.remove("nav-links");
        document.getElementById("nav").classList.add("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.add("new-a");
        }
        document.querySelector("h1").style.marginTop = "15%";
        document.getElementById("arrow").classList.remove("hidden");
    } else if(currentPosition == previousPosition || currentPosition < previousPosition) {
        document.getElementById("nav").classList.add("nav-links");
        document.getElementById("nav").classList.remove("new-nav");
        for(let i = 0; i < aInNav.length; i++){
            aInNav[i].classList.remove("new-a");
        }
    }
}





document.getElementById("arrow").addEventListener("click", () => {
    let home = document.getElementById("home");
    let homeRect = home.getBoundingClientRect();
    window.scrollTo({
        top: homeRect.top,
        left: homeRect.left,
        behavior: "smooth",
    })
})

document.getElementById("home").addEventListener("click", () => {
    let home = document.getElementById("home");
    let homeRect = home.getBoundingClientRect();
    window.scrollTo({
        top: homeRect.top,
        left: homeRect.left,
        behavior: "smooth",
    })
})

document.getElementById("about-us").addEventListener("click", () => {
    let aboutUs = document.getElementById("about-us");
    let aboutUsRect = aboutUs.getBoundingClientRect();
    window.scrollTo({
        top: aboutUsRect.top,
        left: aboutUsRect.left,
        behavior: "smooth",
    })
})

document.getElementById("services").addEventListener("click", () => {
    let services = document.getElementById("services");
    let servicesRect = services.getBoundingClientRect();
    window.scrollTo({
        top: servicesRect.top,
        left: servicesRect.left,
        behavior: "smooth",
    })
})

document.getElementById("tours").addEventListener("click", () => {
    let tours = document.getElementById("tours");
    let toursRect = tours.getBoundingClientRect();
    window.scrollTo({
        top: toursRect.top,
        left: toursRect.left,
        behavior: "smooth",
    })
})
