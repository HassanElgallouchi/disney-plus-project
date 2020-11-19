// declare variables
let btnBottom = document.querySelector(".btn-bottom");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
let signup = document.querySelector(".signup");

// function on scroll window
window.onscroll = function () {

    // condition if page height >= 700
    if (window.pageYOffset >= 700) {
        btnBottom.style.display = "block";
        btnBottom.style.position = "fixed";
        btnBottom.style.width = "100%";
    } else {
        btnBottom.style.display = "none";
    }

    // condition if page height >= 600 and page width >= 480
    if ((window.pageYOffset) >= 600 && (window.innerWidth) >= 480) {
        menu.style.background = "#090b13";
        logo.style.display = "block";
        signup.style.display = "block";
    } else {
        menu.style.background = "transparent";
        logo.style.display = "none";
        signup.style.display = "none";
    }

}