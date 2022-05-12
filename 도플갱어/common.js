$(function() {
    $("#gnb>ul>li>a").on("mouseover focus",gnbPlay);

    function gnbPlay() {
        if ($("#gnb>ul>ul:visible")) {
            
            $(this).next().stop(true,true).slideDown(300);
        }
    }

    $("#gnb>ul>li>a").on("mouseleave",gnbleave);

    function gnbleave() {
        $("#gnb ul ul:visible").slideUp(300);
    }
})

