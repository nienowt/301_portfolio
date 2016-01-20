(function(module){

  var repos = {};
  var qs = '?per_page=10&sort=updated';

  repos.all = [];


  repos.requestRepo = function(callback){
    $.get('/github/users/nienowt/repos' + qs,function(data, msg, xhr){
      repos.all = data;
      console.log(repos.all);
    }).done(callback);
  };

  repos.with = function(attr){
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
