var projects = [];

function Project (a) {
  this.title = a.title;
  this.date = a.date;
  this.projectUrl = a.projectUrl;
  this.client = a.client;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.data('title', this.title);
  $newProject.data('date', this.date);
  $newProject.data('projectUrl', this.projectUrl);
  $newProject.data('client', this.client);

  $newProject.removeClass('template');
  return $newProject;
};

projectData.forEach(function(a) {
  projects.push(new Project(a));
});
