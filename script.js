/* Navigation buttons */
$(document).ready(function() {
   $("#aboutAbe").hide();
    $("#contact").hide();
});

$(document).ready(function(){
    $("a[href*=aboutAbe]").click(function() {
        $("#projects").hide();
        $("#contact").hide();
        $("#aboutAbe").fadeIn();
    });
});

$(document).ready(function(){
    $("a[href*=projects]").click(function() {
        $("#aboutAbe").hide();
        $("#contact").hide();
        $("#projects").fadeIn();
    });
});

$(document).ready(function(){
    $("a[href*=contact]").click(function() {
        $("#aboutAbe").hide();
        $("#projects").hide();
        $("#contact").fadeIn();
    });
});



/* Navigation for Small Devices */
$(document).ready(function() {
    if ($(window).width() <= 570) {
        $("#navBar ul ul:first-of-type").hide();
    }
    else {
        $("#navBar button").hide();
    };
});

$(window).resize(function() {
   if($(window).width() <= 570) {
       $("#navBar ul ul:first-of-type").hide();
       $("#navBar button").show();
   } 
    else {
        $("#navBar ul ul:first-of-type").show();
        $("#navBar button").hide();
    };
});

$(document).ready(function() {
    $(".smallMenu").hide();
    $("#menuButton").click(function() {
        $(".smallMenu").toggle();
    });
});

