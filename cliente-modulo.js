var miModulo = require("./connect-git.js");

//console.log(miModulo.holaMundo());



miModulo.getRepos("luisrv",function(repos){
		console.log("luis tiene "+repos.length + " repositorios");
		console.log("Repos=",repos);
	});