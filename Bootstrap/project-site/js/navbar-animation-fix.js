$('#menu-top').on('show.bs.collapse', function() {
    $('.banner-main').css('transform', 'translate(-50%, 10%)');
});

$('#menu-top').on('hide.bs.collapse', function() {
    $('.banner-main').css('transform', 'translate(-50%, -50%)');
});