var vorpal = require('vorpal')();
var pm = require('./proj-client-module');


vorpal
    .command('login [url] [model] [username] [password]', 'login(url, model, username, password)')
    .action(function(args, callback) {
	pm.login(args.url, args.model, args.username, args.password);
	callback();
    });

vorpal
    .command('token', 'localstorage.getItem(\'token\')')
    .action(function(args, callback) {
	this.log(localStorage.getItem('token'));
	callback();
    });

vorpal
    .delimiter('PROJ-CLI:')    
    .show();

