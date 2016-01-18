
(function(module){
  function Project (a) {
    this.title = a.title;
    this.date = a.date;
    this.projectUrl = a.projectUrl;
    this.client = a.client;
    this.category = a.category;
    this.img = a.img;
    this.description = a.description;
  };

  Project.all = [];

  Project.prototype.toHtml = function() {
    var appTemplate = $('#projectTemplate').html();
    var compiledTemplate = Handlebars.compile(appTemplate);
    var dataSource = this;
    var html = compiledTemplate(dataSource);
    return html;
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

  Project.fetchAll = function(a){
    if(localStorage.rawData){
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
          a();
        }
      });
    } else {
      project.getAll();
      a();
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
