//DROPDOWN MENU 
$(document).ready(function () {
    $('.nav-btn').click(function () {
        // console.log('it works!')
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

// arrow button

$('.scroll__arrow').hide(0).delay(2000).show(1000);

//arrow button scroll

$('.scroll__arrow').click(function () {
    // console.log('work');
    $('html').animate({
        scrollTop: $('header').height()
    }, 1000);
    return false;
})

// side menu 

const menuIcon = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.side__menu');
const sideMenuBlur = document.querySelector('.side__menu__bg');
const timesIcon = document.querySelector('.fa-times');
const icon = document.querySelector('.toggle__menu');
const site = document.querySelector('body');
const heading = document.querySelector('h1');
let isMenuOpen = false;

icon.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active');
    if (sideMenu.classList.contains('active')) {
        // console.log('works');     
        isMenuOpen = true;
    }
})


window.addEventListener('scroll', function () {
    if (isMenuOpen) {
        sideMenu.classList.remove('active');
        sideMenuBlur.classList.remove('active');
        menuIcon.classList.remove('active');
        timesIcon.classList.remove('active');
        // console.log('XD');
        isMenuOpen = false;
    }
})
icon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    timesIcon.classList.toggle('active');
})

sideMenuBlur.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active');
    menuIcon.classList.toggle('active');
    timesIcon.classList.toggle('active');


})


$(document).ready(function () {

    console.log($('.sideMenuBlur').hasClass('active'));
})