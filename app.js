var vorpal = require('vorpal')();
var pcm = require('./proj-client-module');


vorpal
    .command('login [url] [model] [username] [password]', 'login(url, model, username, password)')
    .action(function(args, callback) {
	pcm.login(args.url, args.model, args.username, args.password);
	callback();
    });

vorpal
    .command('token', 'localstorage.getItem(\'token\')')
    .action(function(args, callback) {
	this.log(localStorage.getItem('token'));
	callback();
    });

vorpal
    .command('logout [url] [model]', 'logout(url, model)')
    .action(function(args, callback) {
	pcm.logout(args.url, args.model);
	callback();
    });

vorpal
    .command('update [url] [model] [id] [str]', 'update(url, model, id, str)')
    .action(function(args, callback) {
	pcm.update(args.url, args.model, args.id, JSON.parse(args.str));
	callback();
    });

vorpal
    .command('tips', 'commands\' tips')
    .action(function(args, callback) {
	this.log("login http://31.220.53.162:8080/api Donors fritz senha");
	this.log("logout http://31.220.53.162:8080/api Donors");
	this.log("update http://31.220.53.162:8080/api Donors 1 \'{\"username\":\"frits\"}\'");
	callback();
    });

vorpal
    .command('clear', 'clear the screen')
    .action(function(args, callback) {
	this.log('\033[2J');
	callback();
    });


vorpal
    .delimiter('PROJ-CLI:')    
    .show();

