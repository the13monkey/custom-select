$( document ).ready(function() {

    $('#jq-options').addClass('select-hide')
    $('.custom-select-jq select').hide();
    $('.custom-select-jq').append("<div id='options'></div>");
    var defaultText = "jQuery &lt;select&gt; element";
    $('#options').html(defaultText);
    $('.custom-select-jq').click(function(){
        $(this).toggleClass('select-half');
        $('#jq-options').toggleClass('select-hide');
    });
    $('#jq-options li').click(function(){
        $('.jq-selected').removeClass('jq-selected');
        $(this).addClass('jq-selected');
        var data = $(this).html();
        $('#options').html(data);
    });

    const $dropdown = $('.custom-select-jq');

    $(document).mouseup(function (e) {
        if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
            $dropdown.removeClass('select-half');
            $dropdown.find('#jq-options').addClass('select-hide');
        }
    });
    
});