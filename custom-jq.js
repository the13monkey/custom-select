$( document ).ready(function() {
    $('#jq-options').addClass('select-hide')
    $('.custom-select-jq select').hide();
    $('.custom-select-jq').append("<div id='options'></div>");
    var defaultText = "hello";
    $('#options').html(defaultText);
    $('.custom-select-jq').click(function(){
        $(this).toggleClass('select-half');
        $('#jq-options').toggleClass('select-hide');
    });
    
});