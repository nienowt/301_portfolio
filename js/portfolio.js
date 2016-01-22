
(function(module){
  var Project = (function(){
    var newId = 0;

    return function Project (opts) {
      this.title = opts.title;
      this.date = opts.date;
      this.projectUrl = opts.projectUrl;
      this.client = opts.client;
      this.category = opts.category;
      this.img = opts.img;
      this.description = opts.description;
      this.id = newId += 1;
    };
  })();

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#projectTemplate').html());
    return template(this);
  };

  Project.loadAll = function(projectData){
    Project.all = projectData.map(function(ele){
      return new Project(ele);
    });
  };

  Project.getAll = function(){
    $.getJSON('/data/projects.json', function(projectData){
      Project.loadAll(projectData);
      localStorage.projectData = JSON.stringify(projectData);
    });
  };

  Project.fetchAll = function(callback){
    if(localStorage.projectData){
      $.ajax({
        type: 'HEAD',
        url: '/data/projects.json',
        success: function(data,message,xhr){
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || localStorage.eTag != eTag){
            localStorage.eTag = eTag;
            Project.getAll();
          } else {
            Project.loadAll(JSON.parse(localStorage.projectData));
          }
          callback();
        }
      });
    } else {
      Project.getAll();
      callback();
    }
  };

  Project.sortClients = function(){
    return Project.all.map(function(project){
      return project.client;
    }).reduce(function(names, name){
      if(names.indexOf(name) === -1){
        names.push(name);
      }
      return names;
    },[]);
  };

  Project.assignKey = function(){
    return Project.sortClients().map(function(name){
      return {
        client : name
      };
    });
  };

  module.Project = Project;
})(window);
