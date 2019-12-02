$(document).ready(function() {

    $(".js--nav-icon").click(function () {
        var nav = $(".main-nav");
        var icon = $(".js--nav-icon i")
        nav.slideToggle(200);
        if (icon.hasClass("fas fa-bars")) {
            icon.removeClass('fas fa-bars');
            icon.addClass("fas fa-times");
        } else {
            icon.removeClass("fas fa-times");
            icon.addClass("fas fa-bars");

        }
    });
})
