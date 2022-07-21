const home = document.querySelector('.logo');
const login = document.querySelector('.login');
const html = document.querySelector('html')
const signup = document.querySelector('.signup-box')
const header = document.querySelector('header')

//clicking home button

home.addEventListener("click", function(e){
    e.preventDefault();

    signup.classList.add("elementToFadeInAndOut");
    setTimeout(function(){signup.classList.remove("elementToFadeInAndOut");}, 1500);
    signup.style.opacity = "0";

    header.classList.add("headerToFadeInAndOut");
    setTimeout(function(){signup.classList.remove("headerToFadeInAndOut");}, 1500);
    header.style.opacity = "0";

    setTimeout(function(){
    html.classList.add("backgroundToFadeInAndOut");
    setTimeout(function(){html.classList.remove("backgroundToFadeInAndOut");}, 1500);
    html.style.opacity = "0";

    setTimeout(function() {
        window.location.href = "./index.html"
    }, 600);
}, 1000)

  });
