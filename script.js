const main = document.querySelector("main")

const loginButton = document.querySelector('.login')

function updateHomepage(){
    main.innerHTML = `<h1>Hello<h1>`
    // let hash = window.location.hash.substring(1);
    // updateNav(hash);
    // updateMain(hash);
}


window.addEventListener('hashchange', (e) => {
   updateHomepage()
});

