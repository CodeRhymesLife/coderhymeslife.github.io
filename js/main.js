var aboutMeData = [
    {
        title: "Education",
        image: "education.jpg",
        descriptionHtml: "Education description"
    },
    {
        title: "Research",
        image: "research.png",
        descriptionHtml: "Research description"
    },
    {
        title: "Home",
        image: "home.jpg",
        descriptionHtml: "Home description"
    },
    {
        title: "Code",
        image: "code.png",
        descriptionHtml: "Code description"
    },
    {
        title: "Sports",
        image: "soccerBall.png",
        descriptionHtml: "Sports description"
    },
    {
        title: "Gaming",
        image: "nintendo-controller.jpg",
        descriptionHtml: "Gaming description"
    },
];

$(window).load(function () {

    aboutMeData.forEach(function (aboutMeDataPoint) {
        var aboutMeButton = $(
            "<li>" +
                "<div class='imageContainer'>" +
                    "<img src='images/" + aboutMeDataPoint.image + "' />" +
                "</div>" +
            "</li>");
        $(".aboutMeButtons").append(aboutMeButton);

        var description = $("<div>" + aboutMeDataPoint.descriptionHtml + "</div>");
        $(".aboutMeDescriptions").append(description);

        aboutMeButton.click(function () {
            // Hide any currently showing descriptions
            $(".aboutMeDescriptions div").hide();

            // Show the description for the selected button
            description.show();
        });
    });
});