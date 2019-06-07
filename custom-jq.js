$( document ).ready(function() {

    $('#jq-options').addClass('select-hide')
    $('.custom-select-jq select').hide();
    $('.custom-select-jq').append("<div id='options'></div>");
    var defaultText = "Select an option below:";
    $('#options').html(defaultText);
    $('.custom-select-jq').click(function(e){
        e.stopPropagation();
        $(this).toggleClass('select-half');
        $('#jq-options').toggleClass('select-hide');
    });
    $('#jq-options li').click(function(){
        $('.jq-selected').removeClass('jq-selected');
        $(this).addClass('jq-selected');
        var data = $(this).html();
        $('#options').html(data);
    });
    $(document).click(function(){
        $("#jq-options").hide();
        $('.custom-select-jq').removeClass('select-half');
    });
      
    
});