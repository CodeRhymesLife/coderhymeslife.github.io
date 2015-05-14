$(window).load(function () {
    // When an about me button is clicked show it's description
    $(".aboutMe li").click(function (e) {
        // Hide any currently showing descriptions
        $(".aboutMeDescriptions div").hide();

        // Show the description for the selected aboutMe button
        $("." + $(this).attr("data-aboutMeDescriptionClassName")).show();
    });
});