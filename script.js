$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});

//home animasyonu

var typed = new Typed(".typing", {

    strings: ["Youtuber'ım", "Developer'ım", "Yazarım", "3D Designer'ım", "Game Designer'ım"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

var typed = new Typed(".typing-2", {

    strings: ["Youtuber'ım", "Developer'ım", "Yazarım", "3D Designer'ım", "Game Designer'ım"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});