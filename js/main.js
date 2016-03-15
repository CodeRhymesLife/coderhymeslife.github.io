$(window).load(function () {
    createGraph();
    attachModalEvents();
});

Handlebars.registerHelper('renderResumeSection', function () {
    // Default template
    var templateName = "detailedDescriptionSectionResumeTemplate";
    if (this.title == "Education")
        templateName = "educationSectionResumeTemplate";
    else if (this.title == "Technical Skills")
        templateName = "technicalSkillsSectionResumeTemplate";

    var source = $("#" + templateName).html();
    var template = Handlebars.compile(source);
    return template(this);
});

Handlebars.registerHelper('printArray', function (arr, options) {
    return arr.join(', ');
});

var graph;
function createGraph() {
    var data = [
        aboutMeData.cv,
        aboutMeData.education,
        aboutMeData.research,
        aboutMeData.home,
        aboutMeData.code,
        aboutMeData.fun,
    ];

    graph = new Graph();

    // Add the center node to the graph
    var centerNode = {
        id: "center",
        className: "center",
        radiusOptions: {
            "small": 60,
            "large": 100,
        },
        r: function () {
            return getCircleRadius(this);
        },
        charge: function () {
            return getCharge(this);
        },
        img: {
            src: "images/avatar-profile.png",
        },
        click: function () {
            window.location.reload();
        },
    }
    graph.addNode(centerNode);

    // Create a graph node for each data element
    data.forEach(function (item) {
        var aboutMeNode = {
            id: item.title,
            title: item.title,
            className: "aboutMeNode",
            radiusOptions: {
                "small": 40,
                "large": 60,
            },
            r: function () {
                return getCircleRadius(this);
            },
            charge: function () {
                return getCharge(this);
            },
            click: function () {
                window.location.href = "#" + item.title;
            },
        };
        graph.addNode(aboutMeNode);

        // Link the new node to the center node
        graph.addLink({
            source: centerNode,
            target: aboutMeNode,
        });
    });
    graph.update();
}

function getCircleRadius(node) {
    return graph.w <= 480 || graph.h <= 480 ?
			node.radiusOptions.small :
			node.radiusOptions.large;
}

function getCharge(node) {
	return getCircleRadius(node) * -100;
}

function printElement(elem, append, delimiter) {
    var domClone = elem.cloneNode(true);

    var $printSection = document.getElementById("printSection");

    if (!$printSection) {
        $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }

    if (append !== true) {
        $printSection.innerHTML = "";
    }

    else if (append === true) {
        if (typeof (delimiter) === "string") {
            $printSection.innerHTML += delimiter;
        }
        else if (typeof (delimiter) === "object") {
            $printSection.appendChlid(delimiter);
        }
    }

    $printSection.appendChild(domClone);

    window.print();
}

function attachModalEvents() {
    // Hook up model events
    $('#aboutMeDescriptionmodal').on('show.bs.modal', function (event) {
        var modal = $(this)

        var aboutMeData = modal.data("aboutMeData");

        // Add the title and description
        modal.find('.modal-title').text(aboutMeData.title);

        // Choose the appropriate template based on what we're rendering
        var templateName = "rowsOfContentTemplate";
        if (aboutMeData.title == "CV")
            templateName = "cvTemplate";

        var source = $("#" + templateName).html();
        var template = Handlebars.compile(source);

        modal.find('.modal-body')
            .addClass(aboutMeData.class || "")
            .html(template(aboutMeData));
    });

    $(window).bind('hashchange', navigate);

    // Navigate to the proper part of the page based on the hash
    navigate();
}

// Use the hash to navigate between functions
function navigate() {
    // Get the content after the hash
    var hash = location.hash.replace("#", "").toLowerCase();

    // Hide the modal if it's open
    $('#aboutMeDescriptionmodal').modal('hide');

    if (aboutMeData[hash]) {
        $('#aboutMeDescriptionmodal').data("aboutMeData", aboutMeData[hash])
        $('#aboutMeDescriptionmodal').modal('show');
    }
}