function carregaControlIcons(value) {
    $('#' + value).append('<div id="control-icons-' + value + '"></div> ')
    $('#control-icons-' + value).load('./control-icons.html');
}

$(document).click(function (e) {
    if ($(e.target).hasClass('close-icon')) {
        $(e.target).parents("div:first").parent().prop('hidden', true); 
        $.cookie("confia-dashboard", "off");
    }
    if ($(e.target).hasClass('collapse-icon')) {
        var card_base = $(e.target).parents("div:first");
        var card_text = card_base.parents('div:first').find('.card-text');
        var card_col_icon = e.target;
        
        if (card_text.is(':hidden')) {
            card_text.prop('hidden', false);
            $(card_col_icon).removeClass('glyphicon-collapse-down');
            $(card_col_icon).addClass('glyphicon-collapse-up');
        } else {
            card_text.prop('hidden', true);
            $(card_col_icon).removeClass('glyphicon-collapse-up');
            $(card_col_icon).addClass('glyphicon-collapse-down');
            
        }
    }
})

function getURLParam(name){
    var queryString = window.location.search;
    var searchParams = new URLSearchParams(queryString);
    var paramValue = searchParams.get(name);
    return paramValue||1;
}

