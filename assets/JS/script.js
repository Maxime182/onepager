
$(document).ready(function() {

    $('nav.navbar ul li a').on('click',function (e) {
        
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 200
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('section#section-txt_list ul').hover( function() {
        $( this ).addClass( "hover" );
      }, function() {
        $( this ).removeClass( "hover" );
      }
  );

    var owlDownloads = $('.owlDownloads'); 

    owlDownloads.owlCarousel({
        loop:true,
        nav:false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    var owlNews = $('.owlNews'); 

    owlNews.owlCarousel({
        loop:true,
        nav:false, 
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });

    $('section.downloads .owlNav .prev').click(function() {
        owlDownloads.trigger('prev.owl.carousel');
    })

    $('section.downloads .owlNav .next').click(function() {
        owlDownloads.trigger('next.owl.carousel');
    })

    $('section.newsitems .owlNav .prev').click(function() {
        owlNews.trigger('prev.owl.carousel');
    })

    $('section.newsitems .owlNav .next').click(function() {
        owlNews.trigger('next.owl.carousel');
    })

    var heightTitle = $('section#section-txt_faq [data-id="element_1430084"]').height(); 
    var heightDesc = $('section#section-txt_faq [data-id="element_1430083"]').height(); 

    $('section#section-txt_faq .accordion .wrapper').css("max-height", heightTitle + heightDesc - 107 + 'px');

});