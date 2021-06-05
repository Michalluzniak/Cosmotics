//DROPDOWN MENU 

$(document).ready(function () {
    $('.nav-btn').click(function () {
        // console.log('it works!')
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.drop').toggleClass('rotate');
    });


    $(function () {
        $('.logo').textyle({
            easing: 'linear',

        })
    });
});

$('.scrollTo').hide(0).delay(1300).show(1000);

$('.scrollTo').click(function () {
    console.log('work');
    $('html,body').animate({
        scrollTop: $('header').height()
    }, 1000);
    return false;
})



// $('.fa-bars').click(function () {
//     $(this).find('.sideDrop').toggleClass('active');
// });



const menuIcon = document.querySelector('.fa-bars');
const sideMenu = document.querySelector('.sideDrop');
const sideMenuBlur = document.querySelector('.side-menu-bg')

menuIcon.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active')
})

sideMenu.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
    sideMenuBlur.classList.toggle('active')
})

// if()
// window.addEventListener('scroll', function () {
//     sideMenu.classList.toggle('active');
//     sideMenuBlur.classList.toggle('active')

// })