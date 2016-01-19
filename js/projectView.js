(function(module){
  var projectView = {};

  projectView.populateFilters = function() {
    $('article').map(function(){
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-year');
        var optionTag = '<option value="'+ val +'">' + val + '</option>';
        if ($('#projectYear option[value="' + val + '"]').length === 0) {
          $('#projectYear').append(optionTag);
        }
        val = $(this).attr('data-category');
        optionTag = '<option value="'+ val +'">' + val + '</option>';
        if ($('#projectCategory option[value="' + val + '"]').length === 0) {
          $('#projectCategory').append(optionTag);
        }
      }
    });
  };

  projectView.handleArticle = function () {
    $('article').on('click', function(event){
      event.preventDefault();
      $(this).find('p').toggle();
    });
  };


  projectView.handleCatFilter = function () {
    $('#projectCategory').on('change', function(){
      if ($(this).val()) {
        $('article').hide();
        var category = this.value;
        $('article').filter('[data-category = "'+category+'"]').show();
      } else {
        $('article').not('template').show();
      }
      $('#projectYear').val('');
    });
  };

  projectView.handleDateFilter = function () {
    $('#projectYear').on('change', function(){
      if ($(this).val()) {
        $('article').hide();
        var year = this.value;
        $('article').filter('[data-year = "'+year+'"]').show();
      } else {
        $('article').not('template').show();
      }
      $('#projectCategory').val('');
    });
  };

  projectView.initIndex = function() {
    Project.all.forEach(function(a) {
      $('#projectArea').append(a.toHtml());
      $('article p').hide();
    });
    projectView.handleArticle();
    projectView.handleDateFilter();
    projectView.handleCatFilter();
    projectView.populateFilters();
    projectView.initClientFacts();
  };

  projectView.initClientFacts = function() {
    var template = Handlebars.compile($('#client-template').text());
    Project.assignKey().forEach(function(a) {
      $('#facts-area').append(template(a));
    });
  };

  module.projectView = projectView;
})(window);
