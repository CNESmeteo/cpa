/*
 * Application
 *
 */

(function($) {

    $(document).tooltip({
        selector: "[data-toggle=tooltip]"
    });

    // Focus state for append/prepend inputs
    $('.input-group').on('focus', '.form-control', function () {
        $(this).closest('.input-group, .form-group').addClass('focus');
    }).on('blur', '.form-control', function () {
        $(this).closest('.input-group, .form-group').removeClass('focus');
    });


    // wizard component
    function AccWizard_onNext(parent, panel) {
        hash = "#" + panel.id;
        $(".acc-wizard-sidebar",$(parent))
            .children("li")
            .children("a[href='" + hash + "']")
            .parent("li")
            .removeClass("acc-wizard-todo")
            .addClass("acc-wizard-completed");
    }

    // Load wizard component
    $(window).load(function() {

        // Select elems (dropdowns) custom colors
        $(".custom-theme-select").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

        // Acc-Winzard
        $(".acc-wizard").accwizard({onNext: AccWizard_onNext});
    })

})(jQuery);