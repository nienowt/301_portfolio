(function(module){
  var articleController = {};
  Project.fetchAll(projectView.initIndex);

  articleController.index = function(){
    $('article').show();
    $('article p').hide();
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#projects')).hide();
    console.log($('#projectArea').children().length);
  };

  articleController.byId = function (ctx){
    artId = ctx.params.id;
    $('article').not($('.' + artId)).hide();
    $('article p').show();
  };

  module.articleController = articleController;
})(window);



(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').fadeIn();
    $('.tab-content').not($('#about')).hide();
    repos.requestRepo(repoView.initIndex);
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
