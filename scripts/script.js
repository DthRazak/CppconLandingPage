$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100){
        $('.navbar').css('background-color', 'transparent');
        document.getElementsByTagName("nav")[0].classList.remove("navbar-light");
        document.getElementsByTagName("nav")[0].classList.add("navbar-dark");
    }else{
        $('.navbar').css('background-color', '#ffa734');
        document.getElementsByTagName("nav")[0].classList.remove("navbar-dark");
        document.getElementsByTagName("nav")[0].classList.add("navbar-light");
    }
})
