// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("myP").className = "test";
//   } else {
//     document.getElementById("myP").className = "";
//   }
//}


let btnBottom = document.querySelector(".btn-bottom");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
let signup = document.querySelector(".signup");

window.onscroll = function () {

    if (window.pageYOffset >= 700) {

        btnBottom.style.display = "block";
        btnBottom.style.position = "fixed";
        btnBottom.style.width = "100%";

    } else {
        btnBottom.style.display = "none";

    }



        if ((window.pageYOffset) >= 400 && (window.innerWidth) >= 480) {
            menu.style.background = "#090b13";
            logo.style.display = "block";
            signup.style.display = "block";
        } else {
            menu.style.background = "transparent";
            logo.style.display = "none";
            signup.style.display = "none";
        }

}