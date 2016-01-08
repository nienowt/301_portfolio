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
  var $newProject = $('article.template').clone();


  $newProject.find('h2').text(this.title);
  $newProject.find('time').text(this.date);
  $newProject.attr('data-category', this.category);
  $newProject.attr('data-year',this.date)
  $newProject.find('address > a').attr('href', this.projectUrl);
  $newProject.find('address > a').text(this.client);
  $newProject.find('.description').html(this.description);
  $newProject.find('.projectImg').attr('src',this.img);
  $newProject.append('<hr>');

  $newProject.removeClass('template');


  return $newProject;
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
  console.log('what');
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
  console.log('why not');
});
