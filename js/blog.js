document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

function openNav() {
    document.getElementById('nav_sidebar').style.marginLeft = '0px';

    document.getElementById('header').style.filter = 'blur(3px)';
    document.getElementById('main').style.filter = 'blur(3px)';
    document.getElementById('footer').style.filter = 'blur(3px)';
}

function closeSideBar() {
    document.getElementById('footer').style.filter = 'blur(0px)';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('header').style.filter = 'blur(0px)';
    closeNav();
    closeSearch();
}


function closeNav() {
    document.getElementById('nav_sidebar').style.marginLeft = '-100%';
}





function openSearch() {
    document.getElementById('search_header').style.visibility = 'visible';
    document.getElementById('footer').style.filter = 'blur(3px)';
    document.getElementById('main').style.filter = 'blur(3px)';
    document.getElementById('header').style.filter = 'blur(3px)';
}

function closeSearch() {
    document.getElementById('search_header').style.visibility = 'hidden';
    document.getElementById('footer').style.filter = 'blur(0px)';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('header').style.filter = 'blur(0px)';
    const searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'hidden';
}







const productField = document.getElementById('search_header_input');

const regExPattern = /^[\w]{8,10}$/;

productField.addEventListener('input', function (e) {

    const searchHeaderSubmenu = '';

    if (e.target.value == 'gym') {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'visible';
    } else if (e.target.value == 'GYM') {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'visible';
    } else if (e.target.value == 'Gym') {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'visible';
    } else if (e.target.value == 'g') {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'visible';
    } else if (e.target.value == 'gy') {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'visible';
    } else {
        searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'hidden';
    }


})