page.base('');


page('/', articleController.index);
page('/about', aboutController.index);
page('/article/:id', articleController.byId);
page('/resume', resumeController.index);
page('/contact', contactController.index);


page();
