
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


  Project.fetchAll = function(a){
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      a();
    } else {
      $.getJSON('/data/projects.json', function(projectData){
        Project.loadAll(projectData);
        localStorage.projectData = JSON.stringify(projectData);
        a();
      });
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

  // Project.initClient = function(){
  //   var template = $('#client-template').html();
  //   var compiledTemplate = Handlebars.compile(template);
  //   var data = Project.client;
  //   var html = template(data);
  //   console.log(html);
  // };

  module.Project = Project;
})(window);
