$(function() {
    // $('.Slider-block').owlCarousel({
    //     //  autoplay: true,
    //     lazyLoad: true,
    //     loop: false,
    //     startPosition: 2,
    //     center: true,
    //     smartSpeed: 800,
    //     autoWidth: false,
    //     items: 5,
    //     rtl: true,
    //     dots: false,
    //     mouseDrag: false,
    //     touchDrag: false,
    //     pullDrag: false,
    //     nav: true,
    //     slideBy: 'page',
    //     navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    //     responsiveClass: true,

    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 3,
    //         },
    //         1000: {
    //             items: 6,
    //         },
    //         1300: {
    //             items: 6,
    //         }
    //     }
    // });
    // $('#movies-slider').on('changed.owl.carousel', e => {
    //     var maxs = e.item.count;

    //     var prev = 2;
    //     var next = 6 - prev;
    //     if (e.item.index == maxs - next) {
    //         $('#movies-slider').find('button.owl-next').attr('style', 'display:none');
    //     } else {
    //         $('#movies-slider').find('button.owl-next').attr('style', 'display:block');
    //     }
    //     if (e.item.index == prev) {
    //         $('#movies-slider').find('button.owl-prev').attr('style', 'display:none');
    //     } else {
    //         $('#movies-slider').find('button.owl-prev').attr('style', 'display:block');
    //     }
    // });
    // $('#series-slider').on('changed.owl.carousel', e => {
    //     var maxs = e.item.count;

    //     var prev = 2;
    //     var next = 6 - prev;
    //     if (e.item.index == maxs - next) {
    //         $('#series-slider').find('button.owl-next').attr('style', 'display:none');
    //     } else {
    //         $('#series-slider').find('button.owl-next').attr('style', 'display:block');
    //     }
    //     if (e.item.index == prev) {
    //         $('#series-slider').find('button.owl-prev').attr('style', 'display:none');
    //     } else {
    //         $('#series-slider').find('button.owl-prev').attr('style', 'display:block');
    //     }
    // });
    $('.categories button').on('click', function(e) {
        var getid = $(this).data('target');
        $('.collapse ' + getid).removeClass('show');

        $(this).toggleClass('active');
    });
    $('.Single-Movie .watch-list button').on('click', function(e) {
        e.preventDefault();
        var getid = $(this).data('target');
        $('.collapse').removeClass('show');
        $('.collapse ' + getid).add('show');
        $('.Single-Movie .watch-list button').removeClass('active');
        $(this).addClass('active');
    });
});