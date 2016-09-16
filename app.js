var vorpal = require('vorpal')();
var pm = require('./proj-client-module');


vorpal
    .command('login [url] [models] [username] [password]', 'login(url, models, username, password)')
    .action(function(args, callback) {
	pm.login(args.url, args.models, args.username, args.password);
	callback();
    });

vorpal
    .command('token', 'localstorage.getItem(\'token\')')
    .action(function(args, callback) {
	this.log(localStorage.getItem('token'));
	callback();
    });


vorpal
    .delimiter('COMMAND-LINE$')
    .show();

