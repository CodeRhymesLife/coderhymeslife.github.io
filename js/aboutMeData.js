var aboutMeData = {};

aboutMeData.cv = {
    title: "CV",
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
                                bullets: [
                                    "Taught 10th and 11th grade computer science courses",
                                    "Developed curriculum for 9th-12th grade computer science courses",
                                    "Trained new TSP members as efforts grew",
                                ],
                                summary: [
                                    "At Technology Access Foundation (TAF) it was my privilege to learn and grow as a teacher while teaching computer science to 10th and 11th graders. I was given the opportunity to help develop curriculum and continually improve that curriculum after each class. This iterative learning experience illustrated how challenging teaching is. Each student learns at least a little differently than every other student in class, and developing a lesson plan that reflects each student's abilities and learning style is a challenging task. Fortunately, I was surrounded by a great group of colleagues and teachers that guided me through this process.",
                                    "If I had to choose, I would say the most important takeaway I gained from this expreience is that a teacher is just as much a student as the members of his or her class. I learned how to prepare lessons; how to leverage students' knowledge to teach them on a more personal level; how to collaborate with other teachers to motivate, challenge and develop young minds; and much more, including how to break down a multi-year curriculum into semester, week and class length lesson plans.",
                                    "+++ Special thanks to David Harris for leading us towards positive change +++"
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Technical Skills",
                    items: [
                        {
                            title: "Languages",
                            items: ["HTML", "JavaScript", "C#", "Java", "Scala", "Python", "C", "C++", "SQL"]
                        },
                        {
                            title: "Frameworks",
                            items: ["ASP .NET", "Node JS", "Meteor", "Handlebars", "Play 2.0"]
                        },
                        {
                            title: "Software Tools",
                            items: ["Visal Studio", "Eclipse", "Microsoft Visio", "Git"]
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
                                bullets: [
                                    "Received the highest rating for a software developer at my level",
                                    "Developed server side and client side features to complete end to end scenarios",
                                    "Developed in depth unit tests to ensure the features I implemented maintained stability",
                                    "Worked with several partner teams to develop and test large cross team features",
                                    "Participated in code reviews for core features spanning multiple teams to improve code quality",
                                    "Refactored legacy code to facilitate use by multiple teams",
                                    "Consistently met short term and long term goals to stay on schedule",
                                ]
                            },
                        },
                        {
                            when: {
                                start: "September 2010",
                                end: "December 2012",
                            },
                            where: {
                                institution: "Microsoft: Access",
                                location: "Redmond, WA",
                            },
                            link: "http://office.microsoft.com/en-us/access",
                            description: {
                                header: "Software Development Engineer",
                                bullets: [
                                    "Ranked in the top 40% of software developers at my level",
                                    "Developed proficiency in the Office development environment",
                                    "Provided code reviews for Access and Excel developers to learn coding patterns and techniques, and improve the quality of shipping code",
                                    "Created development design documents to describe in detail each feature’s code architecture, development cost, and test plan",
                                    "Presented development design documents to team members to inform others of my plans and solidify designs before implementation",
                                    "Implemented multiple features using C++, C#, Script#, Javascript, HTML, CSS, and SQL",
                                    "Developed unit tests for core features to validate code functionality",
                                    "Worked closely with Excel developers, testers, and program managers to designing and implementing Excel Surveys",
                                    "Triaged bugs to ship a high quality product on time",

                                ],
                            },
                        }
                    ]
                },
                {
                    title: "Research",
                    items: [
                        {
                            when: {
                                start: "September 2014",
                                end: "Present",
                            },
                            where: {
                                institution: "University of Washington",
                                location: "Seattle, WA",
                            },
                            link: "http://sbp.bhi.washington.edu/",
                            description: {
                                header: "Semantics of Biological Processes Student Researcher",
                                bullets: [
                                    "Searching for new ways to improve health through the application of biosimulation models",
                                    "Discovering better ways to visualize the components that make up biosimulation models in order to facilitate model composition and decomposition tasks in SemGen",
                                ],
                            },
                        },
                        {
                            when: {
                                start: "August 2013",
                                end: "July 2014",
                            },
                            where: {
                                institution: "Seattle Children's Research Institute ",
                                location: "Seattle, WA",
                            },
                            link: "http://www.seattlechildrens.org/research/childhood-cancer",
                            description: {
                                header: "Cancer Research Volunteer",
                                bullets: [
                                    "Volunteered for Dr. Michael Jensen to assist his research team store flow cytometry data to allow for more efficient data retrieval and analysis",
                                    "Investigated ways to mathematically model biological systems to help advance research",
                                ],
                            },
                        },
                        {
                            when: {
                                start: "August 2013",
                                end: "October 2013",
                            },
                            where: {
                                institution: "University of Washington",
                                location: "Seattle, WA",
                            },
                            link: "https://github.com/rcjames1004/SemGen-Composer",
                            description: {
                                header: "Biomedical and Health Informatics Volunteer",
                                bullets: [
                                    "Created SemGen-Composer - an open source Java application that leverages the powerful functions of SemGen to create, edit, and merge models through an intuitive drag and drop user interface",
                                    "Studied SemSim and SemGen to understand the problem domain",
                                    "Held weekly meetings with Dr. Neal to discuss topics in modular simulation, define project goals and deadlines, discuss project progress, and resolve open issues",
                                    "Developed detailed specification document to describe the user interface for composing and decomposing biosimulation models",
                                    "Learned Java, Java programming patterns, and Java Swing to equip myself with the knowledge needed to write high-quality maintainable code",
                                    "Developed unit tests to validate code functionality and produce a high-quality maintainable product",
                                    "Triaged open issues with Dr. Neal to ensure issues were resolved in order of importance",
                                    "Completed project for Dr. Neal to demo at the Cardiac Physiome Society Annual Meeting",
                                ],
                            },
                        },
                        {
                            when: {
                                start: "January 2013",
                                end: "August 2013",
                            },
                            where: {
                                institution: "University of Washington",
                                location: "Seattle, WA",
                            },
                            link: "http://www.physiome.org",
                            description: {
                                header: "Biological Systems Modeling Volunteer",
                                bullets: [
                                    "Revised and developed integrated quantitative models of biological systems to produce empirical data used to understand medicine and human physiology",
                                    "Revised Diffusion1Dpde model to describe diffusion of particles in one dimension",
                                    "Revised RandomWalk2D model to describe diffusion of particles in two dimensions",
                                    "Created FractionalBrownianMotionWalk model to describe how particles move in two dimensions using the Davies-Harte algorithm",
                                    "Learned transport in cellular and physiological systems equations to understand how particles flow through biological systems",
                                    "Learned Mathematical Modeling Language (MML) to create and update models",
                                ],
                            },
                        },
                        {
                            when: {
                                start: "June 2009",
                                end: "August 2009",
                            },
                            where: {
                                institution: "University of Michigan",
                                location: "Ann Arbor, MI",
                            },
                            description: {
                                header: "Research Assistant, Computer Science",
                                bullets: [
                                    "Assisted Professor Jeffrey Fessler in improving the FDK 3D image reconstruction method.",
                                    "Accelerated the FDK back-projection algorithm using a GPU to parallelize complex equations.",
                                    "Optimized GPU thread batching and reduced memory access latency.",
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Summer Interships",
                    items: [
                        {
                            when: {
                                start: "June 2010",
                                end: "September 2010",
                            },
                            where: {
                                institution: "Intel",
                                location: "Folsom, CA",
                            },
                            description: {
                                header: "Software Development Engineering Intern",
                                bullets: [
                                    "Collected performance data for Intel's GPUs including Ivy Bridge, Sandy Bridge, and Iron Lake.",
                                    "Attended weekly performance/optimization meetings to locate bottlenecks and assign GPU driver optimization tasks.",
                                    "Optimized and added counters to GPU driver code.",
                                    "Developed testing tool to efficiently add counters to GPU driver code.",
                                ],
                            },
                        },
                        {
                            when: {
                                start: "June 2008",
                                end: "August 2008",
                            },
                            where: {
                                institution: "Ford Motor Company",
                                location: "Dearborne, MI",
                            },
                            description: {
                                header: "Data Architect Intern",
                                bullets: [
                                    "Assisted in developing logical and physical data models for the Warranty Service Initiative (WSI).",
                                    "Organized and prepared data models and supporting documentation for team meetings.",
                                    "Accurately updated the Oracle Designer repository with data obtained from meetings.",
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

aboutMeData.education = {
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
};

aboutMeData.research = {
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
};

aboutMeData.home = {
    title: "Home",
    content: [
        {
            image: "comingSoon.jpg",
            text: "More coming soon...",
        },
    ],
};

aboutMeData.code = {
    title: "Code",
    content: [
        {
            image: "comingSoon.jpg",
            text: "More coming soon...",
        },
    ],
};

aboutMeData.fun = {
    title: "Fun",
    content: [
        {
            image: "comingSoon.jpg",
            text: "More coming soon...",
        },
    ],
};