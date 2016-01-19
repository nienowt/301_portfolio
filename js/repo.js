(function(module){

  var repos = {};
  var qs = '?per_page=10&sort=updated';

  repos.all = [];


  repos.requestRepo = function(callback){
    $.ajax({
      url : 'https://api.github.com/users/nienowt/repos' + qs,
      type: 'GET',
      headers: {'Authorization': 'Token ' + git.getToken()},
      success: function(data, msg, xhr){
        repos.all = data;
        console.log(repos.all);
      }
    }).done(callback);
  };

  repos.with = function(attr){
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
