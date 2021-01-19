#!/usr/bin/env node

const program = require('commander');
let process1 = require('child_process');

program.version('1.0.0','-v, --version')
	.command('init <name>')
	.action((name)=>{
		console.log('clone template...');
		process1.exec('git clone https://github.com/VincentZZJ/InitProject.git ' + name,function(error,stdout,stderr){
			if(error!==null){
				console.log('exec error:'+error);
				return ;
			}
			console.log(stdout);
			console.log('clone success!');
			// 删除 .git 文件
			process1.exec('find . -name ".git" | xargs rm -Rf');
		});
	});
program.parse(process.argv);