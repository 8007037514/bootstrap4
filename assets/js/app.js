
const cl = console.log;

$('.tmslider').owlCarousel({
     loop : true,
     nav : true,
     navText : ['<i class="fa-solid fa-arrow-left fa-2x"></i>','<i class="fa-solid fa-arrow-right fa-2x"></i>'],
     autoplay : true,
     
    responsive : {
        0 : {
            items : 1,
            dots : false,  
        },
        600 : {
            items : 3,
        },
        1100 : {
            items : 5,
            margin : 20,
        }
    }
})





