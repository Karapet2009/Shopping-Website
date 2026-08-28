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
    document.getElementById('footer').style.filter = 'blur(5px)';
    document.getElementById('main').style.filter = 'blur(5px)';
    document.getElementById('header').style.filter = 'blur(5px)';
}

function closeSearch() {
    document.getElementById('search_header').style.visibility = 'hidden';
    document.getElementById('footer').style.filter = 'blur(0px)';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('header').style.filter = 'blur(0px)';
    const searchHeaderSubmenu = document.getElementById('search_header_submenu_block').style.visibility = 'hidden';
}




function openPrice() {
    document.getElementById('price').style.visibility = 'visible';
    document.getElementById('nav_filter').style.marginRight = '0px';
    document.getElementById('footer').style.filter = 'blur(3px)';
    document.getElementById('main').style.filter = 'blur(3px)';
    document.getElementById('header').style.filter = 'blur(3px)';
}

function closePrice() {
    document.getElementById('price').style.visibility = 'hidden';
    document.getElementById('nav_filter').style.marginRight = '-100%';
    document.getElementById('footer').style.filter = 'blur(0px)';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('header').style.filter = 'blur(0px)';
}





document.addEventListener('DOMContentLoaded', function () {
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');

    const products = document.querySelectorAll('.product1');

    function filterProducts() {
        const minPrice = parseInt(minPriceInput.value, 10);
        const maxPrice = parseInt(maxPriceInput.value, 10);


        products.forEach(product => {
            const price = parseInt(product.getAttribute('data-price'), 10);
            if (price >= minPrice && price <= maxPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }

            if (minPriceInput.value > 2) {

            }
        });
    }

    minPriceInput.addEventListener('input', filterProducts);
    maxPriceInput.addEventListener('input', filterProducts);

    filterProducts();
});





document.addEventListener('DOMContentLoaded', function () {
    const minPriceInputSecond = document.getElementById('min-price-input');
    const maxPriceInputSecond = document.getElementById('max-price-input');
    const products = document.querySelectorAll('.product1');

    function filterProducts() {
        const minPriceTwo = parseInt(minPriceInputSecond.value, 10);
        const maxPriceTwo = parseInt(maxPriceInputSecond.value, 10);

        products.forEach(product => {
            const price = parseInt(product.getAttribute('data-price'), 10);
            if (price >= minPriceTwo && price <= maxPriceTwo) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    minPriceInputSecond.addEventListener('input', filterProducts);
    maxPriceInputSecond.addEventListener('input', filterProducts);

    filterProducts();
});






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