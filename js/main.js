Handlebars.registerHelper('renderResumeSection', function () {
    // Default template
    var templateName = "detailedDescriptionSectionResumeTemplate";
    if (this.title == "Education")
        templateName = "educationSectionResumeTemplate";

    var source = $("#" + templateName).html();
    var template = Handlebars.compile(source);
    return template(this);
});

$(window).load(function () {
    var aboutMeData = [
        {
            title: "Resume",
            class: "resume",
            content: [
                {
                    sections: [
                            {
                                title: "Education",
                                items: [
                                    {
                                        title: "PhD Biomedical and Health Informatics",
                                        when: {
                                            start: "September 2014",
                                            end: "Present",
                                        },
                                        where: {
                                            institution: "University of Washington",
                                            location: "Seattle, WA",
                                        },
                                    },
                                    {
                                        title: "B.S.E. Computer Science Engineering, Minor in Mathematics",
                                        when: {
                                            start: "September 2006",
                                            end: "May 2010",
                                        },
                                        where: {
                                            institution: "University of Michigan",
                                            location: "Ann Arbor, MI",
                                        },
                                    },
                                ],
                            },
                            {
                                title: "Community Service",
                                items: [
                                    {
                                        when: {
                                            start: "January 2011",
                                            end: "May 2014",
                                        },
                                        where: {
                                            institution: "Technology Access Foundation",
                                            location: "Redmond, WA",
                                        },
                                        link: "http://techaccess.org/academy/",
                                        description: {
                                            header: "Teacher Science Partnership (TSP) Volunteer Teacher",
                                            details: [
                                                "Taught 10th and 11th grade computer science courses",
                                                "Developed curriculum for 9th-12th grade computer science courses",
                                                "Trained new TSP members as efforts grew",
                                            ],
                                        },
                                    },
                                ],
                            },
                            {
                                title: "Professional Experience",
                                items: [
                                    {
                                        when: {
                                            start: "December 2012",
                                            end: "August 2014",
                                        },
                                        where: {
                                            institution: "Microsoft: OneNote",
                                            location: "Redmond, WA",
                                        },
                                        link: "http://www.onenote.com",
                                        description: {
                                            header: "Software Development Engineer",
                                            details: [
                                                "Received the highest rating for a software developer at my level",
                                                "Developed server side and client side features to complete end to end scenarios",
                                                "Developed in depth unit tests to ensure the features I implemented maintained stability",
                                                "Worked with several partner teams to develop and test large cross team features",
                                                "Participated in code reviews for core features spanning multiple teams to improve code quality",
                                                "Refactored legacy code to facilitate use by multiple teams",
                                                "Consistently met short term and long term goals to stay on schedule",
                                            ],
                                        },
                                    }
                                ]
                            }
                    ],
                },
            ],
        },
        {
            title: "Education",
            content: [
                {
                    image: "education/uwbhi.png",
                    text: "I'm currently a PhD student studying <a href='http://bhi.washington.edu'>Biomedical and Health Informatics</a> @ the University of Washington. Go Huskies!",
                },
                {
                    image: "education/michigan-logo.jpg",
                    text: "Where do I start. I studied Computer Science Engineering at University of Michigan from 2010-2014. " +
                    "While I was there I met my wife, created life long relationships, and learned a ton about myself and the world. I will forever bleed maize and blue. Go blue!",
                },
                {
                    image: "education/kc-logo.png",
                    text: "KC is where it all started. I remember the first day I got my drivers license: the day I put it in my wallet was the same day I got my first speeding ticket (sorry Dad). " +
                        "When I was a freshman I thought fitting in was everything. I soon learned that being myself was overcomming my greatest obstacle. " +
                        "KC is also where I developed my strongest friendships. I don't know where or who I would be without you KC. Good thing I didn't go to " +
                        "<a href='http://loynorrixhighschool.net/'>that school on Kilgore</a> :). Go Giants!",
                },
            ],
        },
        {
            title: "Research",
            content: [
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
                        "<br/>It's also, in large part, what brought me to UW. During 2013 I was fortunate enough to volunteer for Max Neal, the creator of SemGen, who I worked with " +
                        "to develop a prototype of the \"stage\"--a drag an drop interface to facilitate biosimulation model composition and decomposition tasks. " +
                        "A year later, during my first couple of quarters at UW working with the <a href='http://sbp.bhi.washington.edu/' >Semantics of Biological Processes group</a>, I implemented the first version of the \"stage\" in SemGen. " +
                        "Check out v1 (in test mode) below! For more information about SemGen and the \"stage\" <a href='http://sbp.bhi.washington.edu/projects/semgen' >click here</a>" +
                        "<br/><br/> <iframe width='100%' height='600px' src='semGenStage/stage.html'></iframe>",
                },
            ],
        },
        {
            title: "Home",
            content: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
        {
            title: "Code",
            content: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
        {
            title: "Fun",
            content: [
                {
                    image: "comingSoon.jpg",
                    text: "More coming soon...",
                },
            ],
        },
    ];

    var buttonData = { buttons: aboutMeData };
    var aboutMeButtonsSource = $("#aboutMeButtons").html();
    var template = Handlebars.compile(aboutMeButtonsSource);
    $(".aboutMeButtons").html(template(buttonData));

    $(".aboutMeButton").click(function () {
        for (var i = 0; i < aboutMeData.length; i++) {
            if (aboutMeData[i].title == $(this).text().trim()) {
                $('#aboutMeDescriptionmodal').data("aboutMeData", aboutMeData[i])
                $('#aboutMeDescriptionmodal').modal('show');
            }
        }
    });

    $('#aboutMeDescriptionmodal').on('show.bs.modal', function (event) {
        var modal = $(this)

        var aboutMeData = modal.data("aboutMeData");

        // Add the title and description
        modal.find('.modal-title').text(aboutMeData.title);

        // Choose the appropriate template based on what we're rendering
        var templateName = "rowsOfContentTemplate";
        if (aboutMeData.title == "Resume")
            templateName = "resumeTemplate";

        var source = $("#" + templateName).html();
        var template = Handlebars.compile(source);

        modal.find('.modal-body')
            .addClass(aboutMeData.class || "")
            .html(template(aboutMeData));
    });
});