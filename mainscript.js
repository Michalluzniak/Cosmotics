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

// console.log(nav.offsetHeight);
console.log(window.scrollY)

// scroll activate after 100vh 

const productListContainer = document.querySelector('.product-list-container')
const header = document.querySelector('header')

document.addEventListener('scroll', () => {
    if (window.scrollY >= header.offsetHeight) {
        productListContainer.classList.add('active-scroll');
        // console.log('ok')
    } else {
        productListContainer.classList.remove('active-scroll')
    }
})


// search products

const input = document.querySelector('.search-txt');
const itemsList = document.querySelectorAll('.price')
const info = document.querySelectorAll('.infoAll')
const productList = document.querySelector('.products__list')
const pictures = document.querySelectorAll('.allProducts')

const searchItems = (e) => {
    let searchingValue = e.target.value.toLowerCase();
    let itemsArray = [...itemsList];
    let picturesArray = [...pictures];
    let infoArray = [...info];
    productList.textContent = "";
    let afterHelp = itemsArray.filter(div => div.textContent.toLowerCase().includes(searchingValue)).map(div => div.dataset.key);

    afterHelp.forEach((key, index) => {
        let picture = picturesArray.find(div => div.dataset.key === key)
        picture.style.gridArea = `image${index + 1}`
        let price = itemsArray.find(div => div.dataset.key === key)
        let infoItem = infoArray.find(div => div.classList.contains('products__info' + Math.ceil((index + 1) / 3)))
        price.className = "";
        price.classList.add('price');
        price.classList.add(`price${(index%3) + 1}`);



        if (!productList.contains(infoItem)) {
            infoItem.textContent = "";
            productList.append(infoItem);
        }
        infoItem.append(price);
        // console.log(itemListBar)
        productList.append(picture);
    })

}
input.addEventListener('input', searchItems)