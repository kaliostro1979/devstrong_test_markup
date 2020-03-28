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
     loop:true,
     margin:10,
     nav:true,
     items: 1,
     dots: true,
     autoplay: true
 });

 $('.popular__carousel').owlCarousel({
     loop:true,
     margin:20,
     nav:true,
     items: 3,
     dots: true,
     autoWidth: true,
     autoplay: true
 });

