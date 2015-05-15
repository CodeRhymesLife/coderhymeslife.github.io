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
            ],
        },
    },
    {
        title: "Research",
        image: "research.png",
        description: {
            contentRows: [
                {
                    image: "research/virtualReality.jpg",
                    text: "How can we improve virtual reality simulations of biological processes? How can they be used to improve health? " +
                        "What effects will simulations have on healthcare 5, 10, 50 years from now? How can we exploit gamers to improve medical outcomes? " +
                        "These are just a few of the questions I've been exploring recently. I love technology, I hate cancer, and I'm passionate about software development and gaming. " +
                        "How will I change the world? Check back soon and I might have the answer.",
                },
                {
                    image: "research/semGen.png",
                    text: "\"<a href='http://sbp.bhi.washington.edu/projects/semgen' >SemGen</a> is an experimental software tool for automating the modular composition and decomposition of biosimulation models\" -http://sbp.bhi.washington.edu/projects/semgen" +
                        "<br/>It's also, in large part, the reason I became interested in grad school. During 2013 I was fortunate enough to volunteer for Max Neal, the creator of SemGen, who I worked with " +
                        "to develop a prototype of the \"stage\"--a drag an drop interface to facilitate biosimulation model composition and decomposition tasks. " +
                        "During my first couple of quarters at UW, while working with the <a href='http://sbp.bhi.washington.edu/' >Semantics of Biological Processes group</a>, I implemented the first version of the \"stage\" in SemGen. " +
                        "Check out v1 below! For more information about SemGen and the \"stage\" <a href='http://sbp.bhi.washington.edu/projects/semgen' >click here</a>" +
                        "<br/><br/> <iframe width='100%' height='600px' src='semGenStage/stage.html'></iframe>",
                },
            ],
        },
    },
    {
        title: "Home",
        image: "home.jpg",
        description: {
            contentRows: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
    },
    {
        title: "Code",
        image: "code.png",
        description: {
            contentRows: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
    },
    {
        title: "Sports",
        image: "soccerBall.png",
        description: {
            contentRows: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
    },
    {
        title: "Gaming",
        image: "nintendo-controller.jpg",
        description: {
            contentRows: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
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