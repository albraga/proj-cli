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
    .command('clear', 'clear the screen')
    .action(function(args, callback) {
	this.log('\033[2J');
	callback();
    });

vorpal
    .command('create [url] [model] [str]', 'create(url, model, str)')
    .action(function(args, callback) {
	pcm.create(args.url, args.model, JSON.parse(args.str));
	callback();
    });

vorpal
    .command('getall [url] [model]', 'getall(url, model)')
    .action(function(args, callback) {
	pcm.getAll(args.url, args.model);
	setTimeout(function() {
	    console.log(localStorage.getItem('getall'));    
	}, 2000);
	callback();
    });

vorpal
    .command('get [url] [model] [id]', 'get(url, model, id)')
    .action(function(args, callback, id) {
	pcm.get(args.url, args.model, args.id);
	setTimeout(function() {
	    console.log(localStorage.getItem('get'));    
	}, 2000);
	callback();
    });

vorpal
    .command('delete [url] [model] [id]', 'delete(url, model, id)')
    .action(function(args, callback) {
	pcm.delete(args.url, args.model, args.id);
	callback();
    });

vorpal
    .command('tips', 'commands\' tips')
    .action(function(args, callback) {
	this.log("login http://31.220.53.162:8080/api Donors fritz senha");
	this.log("logout http://31.220.53.162:8080/api Donors");
	this.log("update http://31.220.53.162:8080/api Donors 1 \'{\"username\":\"frits\"}\'");
	this.log("create http://31.220.53.162:8080/api Gifts \'{\"name\":\"panela\"}\'");
	this.log("getall http://31.220.53.162:8080/api Gifts");
	this.log("get http://31.220.53.162:8080/api Gifts 1");
	this.log("delete http://31.220.53.162:8080/api Gifts 1");
	callback();
    });

vorpal
    .delimiter('PROJ-CLI:')    
    .show();

