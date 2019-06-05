$( document ).ready(function() {
    $('#jq-options').addClass('select-hide')
    $('.custom-select-jq select option').hide();
    $('.custom-select-jq').click(function(){
        $(this).toggleClass('select-half');
        $('#jq-options').toggleClass('select-hide');
    });
    
});