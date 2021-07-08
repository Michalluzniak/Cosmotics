//DROPDOWN MENU 
$(document).ready(function () {
    $('.nav-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.drop').toggleClass('rotate');
    });




    //logo and description animation

    $('.logo').textyle({
        easing: 'linear',
        duration: 2000,
        delay: 100
    })

    setTimeout(function () {
        $('.logo__description').textyle({
            easing: 'linear',
            duration: 1000,
            delay: 50
        })
    }, 1000)

});



// arrow button , and burger menu button animation

$('.scroll__arrow').hide(0).delay(2000).show(1000);
// $('nav').hide(0).delay(2000).show(1000);

//arrow button scroll to 
$(".scroll__arrow").click(function () {
    $('html,body').animate({
            scrollTop: $(".description").offset().top
        },
        1000);
});







// side menu 
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.side__menu');
const sideMenuBlur = document.querySelector('.side__menu__bg');
const timesIcon = document.querySelector('.fa-times');
const icon = document.querySelector('.toggle__menu');
const site = document.querySelector('body');
const heading = document.querySelector('h1');

let spanOne = document.querySelector('#hamFirstLine');
let spanTwo = document.querySelector('#hamSecondLine');
let spanThree = document.querySelector('#hamThirdLine');

let isMenuOpen = false;

icon.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active');
    if (sideMenu.classList.contains('active')) {
        isMenuOpen = true;
    }
})

icon.addEventListener('click', function () {
    spanOne.classList.toggle('active');
    spanTwo.classList.toggle('active');
    spanThree.classList.toggle('active');
})


window.addEventListener('scroll', function () {
    if (isMenuOpen) {
        sideMenu.classList.remove('active');
        sideMenuBlur.classList.remove('active');
        spanOne.classList.remove('active');
        spanTwo.classList.remove('active');
        spanThree.classList.remove('active');
        isMenuOpen = false;
    }
})
sideMenuBlur.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active');
    spanOne.classList.remove('active');
    spanTwo.classList.remove('active');
    spanThree.classList.remove('active');

})

// BURGER MENU POP OUT AFTER 1 SCROLL 

window.addEventListener('scroll', function () {
    let scrollPosition = $(window).scrollTop();
    let navHeight = nav.offsetHeight;
    if (scrollPosition > navHeight) {
        icon.classList.add('active');
    } else {
        icon.classList.remove('active');
    }
})

console.log(nav.offsetHeight);