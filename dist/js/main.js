// Select Dom Elements

const   menuBtn = document.querySelector('.menu-icon'),
        menu = document.querySelector('.menu'),
        menuNav = document.querySelector('.links'),
        menuBrand = document.querySelector('.brand'),
        iconItems = document.querySelectorAll('.link-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        iconItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        iconItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

