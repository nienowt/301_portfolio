(function(module){
  repoView = {};

  var render = function(repo){
    var template = Handlebars.compile($('#about-template').text());
    return template(repo);
  };

  repoView.initIndex = function(){
    $('#about ul').append(
      repos.with('has_downloads').map(render)
    );
    console.log('shouldhaveappended');
    console.log(repos.with('has_downloads').map(render));
  };


  module.repoView = repoView;
})(window);
