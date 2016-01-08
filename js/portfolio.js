var projects = [];


function Project (a) {
  this.title = a.title;
  this.date = a.date;
  this.projectUrl = a.projectUrl;
  this.client = a.client;
  this.category = a.category;
  this.img = a.img;
  this.description = a.description;
};

Project.prototype.toHtml = function() {
  var appTemplate = $('#projectTemplate').html();
  var compiledTemplate = Handlebars.compile(appTemplate);
  var dataSource = this;
  var html = compiledTemplate(dataSource);
  return html;
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
  console.log('what');
});

projects.forEach(function(a){
  $('#projectArea').append(a.toHtml());
  console.log('why not');
});
