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

    $(".aboutMeButton").click(function () {
        for (var i = 0; i < data.length; i++) {
            if (data[i].title == $(this).text().trim()) {
                $('#aboutMeDescriptionmodal').data("aboutMeData", data[i])
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