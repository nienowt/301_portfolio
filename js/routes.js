page.base('');


page('/', articleController.index);
page('/about', aboutController.index);
page('/resume', resumeController.index);
page('/contact', contactController.index);

page();
