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

        aboutMeButton.click(function () {
            $('#aboutMeDescriptionmodal').data("aboutMeData", aboutMeDataPoint)
            $('#aboutMeDescriptionmodal').modal('show');
        });
    });

    // When the model is shown show the about me data
    $('#aboutMeDescriptionmodal').on('show.bs.modal', function (event) {
        var modal = $(this)
        var aboutMeData = modal.data("aboutMeData");

        // Add the title and description
        modal.find('.modal-title').text(aboutMeData.title);
        modal.find('.modal-body').html(aboutMeData.descriptionHtml);
    });
});