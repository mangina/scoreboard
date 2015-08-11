$(document).ready(function() {
    var departure = $('table tr td img[src*=dep]').parent().parent();
    var landing = $('table tr td img[src*=lan]').parent().parent();

    $('form input').each(function (indx, element) {
        $(element).attr('checked', 'checked');
    });

    $('form input').click(function () {
        var current = $(this);
        if (current.attr('checked') == 'checked') {
            current.removeAttr('checked');
            if (current.attr('name') == 'departure') {
                departure.css({'display': 'none'});
            }
            else {
                landing.css({'display': 'none'});
            }
        }
        else {
            current.attr('checked', 'checked');
            if (current.attr('name') == 'departure') {
                departure.css({'display': ''});
            }
            else {
                landing.css({'display': ''});
            }
        }
    });
});

