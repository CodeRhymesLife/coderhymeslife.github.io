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

$(window).load(function () {
    var data = [
        aboutMeData.resume,
        aboutMeData.education,
        aboutMeData.research,
        aboutMeData.home,
        aboutMeData.code,
        aboutMeData.fun,
    ];

    var buttonData = { buttons: data };
    var aboutMeButtonsSource = $("#aboutMeButtons").html();
    var template = Handlebars.compile(aboutMeButtonsSource);
    $(".aboutMeButtons").html(template(buttonData));

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

    // Use the hash to navigate between functions
    var navigate = function () {
        // Get the content after the hash
        var hash = location.hash.replace("#", "");

        // Hide the model if it's open
        $('#aboutMeDescriptionmodal').modal('hide');

        for (var i = 0; i < data.length; i++) {
            if (data[i].title == hash) {
                $('#aboutMeDescriptionmodal').data("aboutMeData", data[i])
                $('#aboutMeDescriptionmodal').modal('show');
                return;
            }
        }
    }
    $(window).bind('hashchange', navigate);

    // Navigate to the proper part of the page based on the hash
    navigate();
});