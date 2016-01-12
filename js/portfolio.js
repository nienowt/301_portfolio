

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
  projectData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function(){
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndex();
  } else {
    $.getJSON('/data/projects.json', function(projectData){
      console.log('working');
      Project.loadAll(projectData);
      localStorage.projectData = JSON.stringify(projectData);
      projectView.initIndex();
    });
  }
};

// projects.forEach(function(a){
//   $('#projectArea').append(a.toHtml());
// });
