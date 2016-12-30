$(document).ready(function () {
    var options = document.querySelectorAll('.select select option')
        , value = 0
        , i;
    //    Actions for each select BEGIN
    $('.select').each(function () {
        $(this).append('<ul class="dropdown"></ul>');
        for (i = 1; i < options.length; i++) {
            $(options[i]).hide();
            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo('.select .dropdown');
        }
        $('.select .dropdown').addClass('hidden');
        //  Placeholder BEGIN
        $('.select select').change(function () {
            if ($(this).val() == "0") {
                $(this).addClass("empty");
            }
            else {
                $(this).removeClass("empty");
            }
        });
        $('.select select').change();
        //  Placeholder END
    });
    //    Actions for each select END
    
    // Clickers BEGIN
    $(document).on('click', function (e) {
        var target = $(e.target);
        if (!$(target).is('.select select')) {
            $('.select .dropdown').addClass('hidden');
        }
    });
    $('.select select').click(function () {
        $('.select .dropdown').toggleClass('hidden');
    });
    $('.dropdown li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        value = $(this).attr('data-item');
        $('.select select').find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
        $('.select .dropdown').toggleClass('hidden');
    });
        // Clickers END
    
});