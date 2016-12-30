$(document).ready(function () {
    
    //    Actions for each select BEGIN
    function dropdown(selectName) {
        var options = document.querySelectorAll('.select' + selectName + ' select option')
        , value = 0
        , i;
    $(selectName).each(function () {
        $(this).append('<ul class="dropdown"></ul>');
        for (i = 1; i < options.length; i++) {
            $(options[i]).hide();
            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo('' + selectName + ' .dropdown');
        }
        $(selectName + ' .dropdown').addClass('hidden');
        //  Placeholder BEGIN
        $(selectName + ' select').change(function () {
            if ($(this).val() == "0") {
                $(this).addClass("empty");
            }
            else {
                $(this).removeClass("empty");
            }
        });
        $(selectName + ' select').change();
        //  Placeholder END
    });
    //    Actions for each select END
    
    // Clickers BEGIN
    $(document).on('click', function (e) {
        var target = $(e.target);
        if (!$(target).is(selectName + ' select')) {
            $(selectName + ' .dropdown').addClass('hidden');
        }
    });
    $(selectName + ' select').click(function () {
        $(selectName + ' .dropdown').toggleClass('hidden');
    });
    $(selectName + ' .dropdown li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        value = $(this).attr('data-item');
        $(selectName + ' select').find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
        $(selectName + ' .dropdown').toggleClass('hidden');
    });
        // Clickers END
    }
    
    // Calling functions
    dropdown('.first-select');
    dropdown('.second-select');
});