$(document).ready(function() {
       var selects = document.querySelectorAll('.select'),
           options, 
           dropdown,
           value;
        
    $(selects).each(function() {
        var self = $(this);
        
        // Placeholder BEGIN
        $(self).change(function() {
            if ($(self).val() == '0') {
                $(self).addClass('empty');
            }
            else {
                $(self).removeClass('empty');
            }
        }).change();
        // Placeholder END
        
        $(self).wrap('<div class="select__wrapper"></div>').after('<ul class="select__dropdown"></ul>');
        options = $(self).children();
        $(options).hide();
        dropdown = $(self).next('ul.select__dropdown')
        $(dropdown).hide();
        for (var i = 1; i < options.length; i++) {
                $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(dropdown); 
            }
        
        // Clickers BEGIN
        $(self).on('click', function(e) {
            var target = $(e.target);
            $(target).next(dropdown).toggle();
        });
        
        $(dropdown).children().on('click', function(e) {
            var target = $(e.target);
            $(target).addClass('active').siblings().removeClass('active');
            value = $(target).attr('data-item');
            $(self).find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(dropdown).hide();
        });
        
        $(document).on('click', function(e) {
            var target = $(e.target);
            if (!$(target).is('select')) {
               $('ul.select__dropdown').hide();
            }
        });
        // Clickers END
        
    });
    
});
