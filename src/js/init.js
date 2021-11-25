$(function() {
    $("#services-tabs").tabs();

    $("#portfolio__tabs").tabs();

    $('#owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav: true,
        dots: true
    });
});



let menuBtn = document.getElementById('header__menu-btn');


menuBtn.addEventListener("click", function() {
    let menu = document.getElementById('header__menu');
    menu.classList.toggle('d-sm-none');
});
