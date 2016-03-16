/* Navigation buttons */
$(document).ready(function() {
   $("#aboutMe").hide();
    $("#contact").hide();


    $("a[href*=aboutMe]").click(function() {
        $("#projects").hide();
        $("#contact").hide();
        $("#aboutMe").fadeIn();
    });

    $("a[href*=projects]").click(function() {
        $("#aboutMe").hide();
        $("#contact").hide();
        $("#projects").fadeIn();
    });


    $("a[href*=contact]").click(function() {
        $("#aboutMe").hide();
        $("#projects").hide();
        $("#contact").fadeIn();
    });



/* Navigation for Small Devices */
    if ($(window).width() <= 570) {
        $("#navBar ul ul:first-of-type").hide();
    }
    else {
        $("#menuButton").hide();
    };

    $(window).resize(function() {
       if($(window).width() <= 570) {
           $("#navBar ul ul:first-of-type").hide();
           $("#menuButton").show();
       } 
        else {
            $("#navBar ul ul:first-of-type").show();
            $("#menuButton").hide();
        };
    });

/* Small Devices navigation menu */
    $(".smallMenu").hide();                 // Menu is hidden when page loads.
    $("#menuButton").click(function() {
        $(".smallMenu").toggle();
    });
    
    $(".smallMenu a").click(function() {
        $(".smallMenu").toggle();           // So the menu doesn't stay after a selection is made.
    });
    


/* Projects Slideshow */
    /*
    $("#csfpa").delay(4000).fadeOut('fast', function() {
        $("#csfpa").attr("src", "../portfolio/images/csf_homepage.png").fadeIn();
    });
    
     $("#csfpa").delay(4000).fadeOut('fast', function() {
        $("#csfpa").attr("src", "../portfolio/images/csf_up.png").fadeIn();
     });
     */
});