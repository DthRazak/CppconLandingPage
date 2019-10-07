$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1){
        $('.navbar').css('background-color', 'transparent');
    }else{
        $('.navbar').css('background-color', '#ffa734')
    }
})
