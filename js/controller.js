(function(module){
  var articleController = {};
  articleController.index = function(){
    if ($('#projectArea').children().length === 0) {
      Project.fetchAll(projectView.initIndex);
      console.log('should have fetched all');
    }
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#projects')).hide();
    console.log($('#projectArea').children().length);
  };

  module.articleController = articleController;
})(window);



(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#about')).hide();
  };
  module.aboutController = aboutController;
})(window);


(function(module){
  var resumeController = {};

  resumeController.index = function(){
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#resume')).hide();
  };
  module.resumeController = resumeController;
})(window);

(function(module){
  var contactController = {};

  contactController.index = function(){
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#contact')).hide();
  };

  module.contactController = contactController;
})(window);
