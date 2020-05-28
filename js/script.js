confirm ('bienvenu dans mon petit site');

$(document).ready(function(){
    
    //show navbar when click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    })
    //when scroll body ;;; sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 100){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }
        if( sc > 1220){
            $('.time').countTo();
            $(window).off('scroll');
        }
    });
    //portfolio 
    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn')
        var CSSFilter = $(this).attr('id');
       if( CSSFilter === 'all') {
           $('.imges > div ').fadeIn();
       } else {
           $('.imges > div ').fadeOut();
           $('.imges').contents().filter('.' + CSSFilter).fadeIn();
       }
    });
    //owl.carousel
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    // choose -------
    $('.c-panel li').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');

        var p = $(this).data('role');
        $('.content > div').hide();
        $('.content').contents().filter('#' + p).fadeIn();
    });
    //popup video 
    $('pop').magnificPopup({
        type: 'iframe'
    })

});





