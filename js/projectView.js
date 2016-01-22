(function(module){
  var projectView = {};

  projectView.populateFilters = function() {
    $('article').map(function(){
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-year');
        var optionTag = '<option value="'+ val +'">' + val + '</option>';
        if ($('#year option[value="' + val + '"]').length === 0) {
          $('#year').append(optionTag);
        }
        val = $(this).attr('data-category');
        optionTag = '<option value="'+ val +'">' + val + '</option>';
        if ($('#category option[value="' + val + '"]').length === 0) {
          $('#category').append(optionTag);
        }
      }
    });
  };

  // projectView.handleCatFilter = function () {
  //   $('#projectCategory').on('change', function(){
  //     if ($(this).val()) {
  //       $('article').hide();
  //       var category = this.value;
  //       $('article').filter('[data-category = "'+category+'"]').show();
  //     } else {
  //       $('article').not('template').show();
  //     }
  //     $('#projectYear').val('');
  //   });
  // };

  projectView.handleFilter = function (){
    $('#filters').on('change','select',function(){
      if($(this).val()) {
        $('article').hide();
        var data = this.value;
        var cat = $(this).attr('id');
        $('article').filter('[data-'+cat+'= "'+data+'"]').show();
      } else {
        $('article').not('template').show();
      }
      $('#',cat).val('');
    });
  };

  // projectView.handleDateFilter = function () {
  //   $('#projectYear').on('change', function(){
  //     if ($(this).val()) {
  //       $('article').hide();
  //       var year = this.value;
  //       $('article').filter('[data-year = "'+year+'"]').show();
  //     } else {
  //       $('article').not('template').show();
  //     }
  //     $('#projectCategory').val('');
  //   });
  // };

  projectView.initIndex = function() {
    Project.all.forEach(function(a) {
      $('#projectArea').append(a.toHtml());
      $('article p').hide();
    });
    // projectView.handleDateFilter();
    // projectView.handleCatFilter();
    projectView.handleFilter();
    projectView.populateFilters();
    projectView.initClientFacts();
  };

  projectView.initClientFacts = function() {
    var template = Handlebars.compile($('#client-template').text());
    Project.assignKey().forEach(function(clientnames) {
      $('#facts-area').append(template(clientnames));
    });
  };

  module.projectView = projectView;
})(window);
