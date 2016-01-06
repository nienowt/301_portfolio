var projects = [];
var projectView = {};

function Project (a) {
  this.title = a.title;
  this.date = a.date;
  this.projectUrl = a.projectUrl;
  this.client = a.client;
  this.category = a.category;
  this.description = a.description;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h2').text(this.title);
  $newProject.find('time').text(this.date);
  $newProject.data('category', this.category);
  $newProject.find('address > a').attr('href', this.projectUrl);
  $newProject.find('address > a').text(this.client);
  $newProject.find('.description').html(this.discription);
  $newProject.append('<hr>');
  console.log('okay');

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

projectView.handleMainNav = function() {
  $('.tab').on('click', function(event){
    event.preventDefault();
    $('.tab-content').hide();
    var $content = $(this).data('content');
    console.log($(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
};

$(document).ready( function() {
  projectView.handleMainNav();
});
