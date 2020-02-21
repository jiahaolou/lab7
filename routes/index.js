var json = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	let { projects } = json;
    for (let i = 0; i < projects.length; i++) {
        projects[i]['viewAlt'] = false;
    }
  	response.render('index', json);
};

exports.viewAlt = function(request, response) {
    let { projects } = json;
    for (let i = 0; i < projects.length; i++) {
        projects[i]['viewAlt'] = true;
    }
    response.render('index', json);
};