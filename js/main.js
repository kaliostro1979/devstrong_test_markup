//Navbar drop-down

$('.drop__down').on('click', function () {
    $(this).toggleClass('active__drop__down');
});

//Main menu

$('.main__menu__item').on('mouseover', function () {
    $(this).find('.menu__sqr').show();
});
$('.main__menu__item').on('mouseout', function () {
    $(this).find('.menu__sqr').hide();
});

//Drop down inner

$('.drop__down').on('click', function () {
    $(this).next('div').toggleClass('drop__down_inner_open');
});

//Owl Carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: true,
    autoplay: true
});

$('.popular__carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 3,
    dots: true,
    autoWidth: true,
    autoplay: true
});


//Hit items carousel

let hitItemOwl = $('.hit__items').owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
});

hitItemOwl.on('changed.owl.carousel', function (event) {
    $('#hit__items__next').css("opacity", "1");
    $('#hit__items__prev').css("opacity", "1");
    if (event.page.index === event.page.count - 1) {
        $('#hit__items__next').css("opacity", "0.5");
    }
    if (event.page.index == 0) {
        $('#hit__items__prev').css("opacity", "0.5");
    }
});

$('#hit__items__next').on('click', function () {
    $('.hit__items').trigger('next.owl');
});


$('#hit__items__prev').click(function () {
    $('.hit__items').trigger('prev.owl.carousel');
});


//New items carousel

let newItemOwl = $('.new__items').owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
});

newItemOwl.on('changed.owl.carousel', function (event) {
    $('#new__items__next').css("opacity", "1");
    $('#new__items__prev').css("opacity", "1");
    if (event.page.index === event.page.count - 1) {
        $('#new__items__next').css("opacity", "0.5");
    }
    if (event.page.index == 0) {
        $('#new__items__prev').css("opacity", "0.5");
    }
});

$('#new__items__next').on('click', function () {
    $('.new__items').trigger('next.owl');
});


$('#new__items__prev').click(function () {
    $('.new__items').trigger('prev.owl.carousel');
});

//Latest News Carousel

let latestNewsOwl = $('.latest__news').owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
});

latestNewsOwl.on('changed.owl.carousel', function (event) {
    $('#latest__news__next').css("opacity", "1");
    $('#latest__news__prev').css("opacity", "1");
    if (event.page.index === event.page.count - 1) {
        $('#latest__news__next').css("opacity", "0.5");
    }
    if (event.page.index == 0) {
        $('#latest__news__prev').css("opacity", "0.5");
    }
});

$('#latest__news__next').on('click', function () {
    $('.latest__news').trigger('next.owl');
});


$('#latest__news__prev').click(function () {
    $('.latest__news').trigger('prev.owl.carousel');
});