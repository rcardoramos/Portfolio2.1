const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links li');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll', navLinks.classList.contains('active'));

}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// let lastScrollTop = 0;
// const header = document.getElementById('header');

// window.addEventListener('scroll', function () {
//     let scrollTop = window.scrollY || document.getElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         header.classList.add('hideen');
//     } else {
//         header.classList.remove('hidden');
//     }

//     lastScrollTop = scrollTop;
// });
