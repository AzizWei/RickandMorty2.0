$(document).ready(function(){
    function updateNavbarState() {
        if ($(window).width() <= 540) {
            $("#menu").css("display", "block")
            $("#navbar").css("display", "none")
        } else {
            $("#menu").css("display", "none")
            $("#navbar").css("display", "flex")
        }
    }

    $(window).on("resize", function() {
        updateNavbarState()
    })

    $("#menu").on("click", () => {
        let $navbar = $("#navbar")
        if ($navbar.css("display") === "flex") {
            $navbar.css("display", "none")
        } else {
            $navbar.css("display", "flex")
        }
    })
})