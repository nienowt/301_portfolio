var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function(){
    if (!$(this).hasClass('template')) {
      var val = $(this).find('time').text();
      var optionTag = '<option value="'+ val +'">' + val + '</option>';
      $('#projectYear').append(optionTag);
      val = $(this).attr('data-category');
      optionTag = '<option value="'+ val +'">' + val + '</option>';
      if ($('#projectCategory option[value="' + val + '"]').length === 0) {
        $('#projectCategory').append(optionTag);
      }
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

projectView.handleCatFilter = function () {
  $('#projectCategory').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      var category = this.value;
      $('article').filter('[data-category = "'+category+'"]').show();
    }
  });
};

projectView.handleDateFilter = function () {
  $('#projectYear').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      var year = this.value;
      $('article').filter('[data-year = "'+year+'"]').show();
    }
  });
};

$(document).ready(function() {
  projectView.handleDateFilter();
  projectView.handleCatFilter();
  projectView.populateFilters();
  projectView.handleMainNav();
});
