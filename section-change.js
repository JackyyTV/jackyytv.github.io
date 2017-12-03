$(document).ready(function() {
    $('.content-change').css('height', $('section:nth-of-type(1)').height());
    $('.page-nav-item').click(function() {
        if (!$(this).hasClass('page-nav-active')) {
            var i = $(this).index() + 1;
            $(this).addClass('page-nav-active').siblings('li').removeClass('page-nav-active');
            $('.content-change').css('height', $('section:nth-of-type(' + i + ')').height());
            $('section:nth-of-type(' + i + ')').stop().css('z-index', '0').fadeIn(400, 'linear').siblings('section').stop().css('z-index', '1').fadeOut(400, 'linear');
        }
    });
});
