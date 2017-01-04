$(document).ready(function() {
       var selects = document.querySelectorAll('.select'),
           options, 
           dropdown,
           value;
        
    $(selects).each(function() {
        var self = $(this);
        $(self).hide();
               
        $(self).wrap('<div class="select__wrapper"></div>').before('<div class="select__placeholder">Город *</div>').after('<ul class="select__dropdown"></ul>');
        options = $(self).children();
        dropdown = $(self).next('ul.select__dropdown')
        $('ul.select__dropdown').addClass('hidden');
        for (var i = 0; i < options.length; i++) {
                $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(dropdown); 
            }
        
        // Clickers BEGIN
        $(self).prev().on('click', function(e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).parent().children().last().toggleClass('hidden');
            
        });
        
        $(dropdown).children().on('click', function(e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).addClass('active').siblings().removeClass('active');
            value = $(target).attr('data-item');
            $(self).find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(self).prev().text($(target).text());
            $(target).parent().addClass('hidden');
        });
        
        $(document).on('click', function(e) {
            e.stopPropagation();
            var target = $(e.target);
            if (!$(target).is(self)) {
               $('ul.select__dropdown').addClass('hidden');
            }
        });
        // Clickers END
        
    });
    
});
