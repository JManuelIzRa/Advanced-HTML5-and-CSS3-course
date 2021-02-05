const menuBtn = document.querySelector('.menu_bttn');

const menuDisplay = document.querySelector(".nav");

const backgroundDisplay = document.querySelector(".menu_bg");

let menuOpen = false;

menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuDisplay.classList.add('open');
        backgroundDisplay.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuDisplay.classList.remove('open');
        backgroundDisplay.classList.remove('open');
        menuOpen = false;
    }
});

