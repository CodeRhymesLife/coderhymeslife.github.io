var aboutMeData = [
    {
        title: "Education",
        image: "education.jpg",
        description: {
            contentRows: [
                {
                    image: "education/uwbhi.png",
                    text: "I'm currently a PhD student studying <a href='http://bhi.washington.edu'>Biomedical and Health Informatics</a> @ the University of Washington. Go Huskies!",
                },
                {
                    image: "education/michigan-logo.jpg",
                    text: "Where do I start. I studies Computer Science Engineering at University of Michigan from 2010-2014. " +
                    "While I was there I met my wife, created life long relationships, and learned a ton about myself and the world. I will forever bleed maize and blue. Go blue!",
                },
                {
                    image: "education/kc-logo.png",
                    text: "KC is where it all started. I remember the first day I got my drivers license--the day I put it in my wallet was the same day I got my first speeding ticket (sorry Dad). " +
                        "When I was a freshman I thought fitting in was everything. I soon learned that being myself was overcomming my greatest obstacle. " +
                        "KC is also where I developed my strongest friendships. I don't know where or who I would be without you KC. Good thing I didn't go to " +
                        "<a href='http://loynorrixhighschool.net/'>that school on Kilgore</a> :). Go Giants!",
                },
            ]
        } 
    },
    {
        title: "Research",
        image: "research.png",
        description: "Research description"
    },
    {
        title: "Home",
        image: "home.jpg",
        description: "Home description"
    },
    {
        title: "Code",
        image: "code.png",
        description: "Code description"
    },
    {
        title: "Sports",
        image: "soccerBall.png",
        description: "Sports description"
    },
    {
        title: "Gaming",
        image: "nintendo-controller.jpg",
        description: "Gaming description"
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

        var contentHtml = "";
        aboutMeData.description.contentRows.forEach(function (contentRow) {
            contentHtml +=
                "<div class='rowOfContent'>" +
                    "<img src='images/" + contentRow.image + "' />" +
                    "<p>" + contentRow.text + "</p>" +
                    "<div class='clear'></div>" +
                "</div>";
        });

        modal.find('.modal-body').html(contentHtml);
    });
});