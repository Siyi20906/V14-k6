import { group, check, sleep } from 'k6';
import http from 'k6/http';



// Version: 1.2
// Creator: WebInspector



const writetxt = function(username1,time1) {
	
	let username = username1;
	let time = time1;

	var fso=new ActiveXObject(Scripting.FileSystemObject);
	var f=fso.createtextfile("C:\\a.txt",true);
	
	
	
};
export {writetxt}


