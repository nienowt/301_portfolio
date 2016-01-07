var projectView = {};

projectView.populateFilters = function() {
  $('articles').each(function(){
    if (!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      var optionTag = '<option value="'+ val +'">' + val + '</option>';
      $('#projectCategory').append(optionTag);
    }
  });
};

projectView.handleMainNav = function() {
  $('.tab').on('click', function(event){
    event.preventDefault();
    $('.tab-content').hide();
    var $content = $(this).data('content');
    console.log($(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
};

$(document).ready( function() {
  projectView.populateFilters();
  projectView.handleMainNav();
});
