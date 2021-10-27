$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    // $('.owl-nav button span').click(function(){
    //     $('.active').css({
    //         color: 'red'
    //     })
    // })

    $('.a1').click(function(){
        $('.card1 img').css({
            width: '100px',
            height: '100px'
        })
    })

})

