import { group, check, sleep } from 'k6';
import http from 'k6/http';
import encoding from 'k6/encoding';
import {printerror} from './printerror.js';
// Version: 1.2
// Creator: WebInspector


const Phase6 = function(host1, ID_ORDER1, ID_OPER1,domain1 , username01, password01,username02, password02, cookie1) {
	
	let res, redirectUrl, json;
	let host = host1;	
	let ID_ORDER = ID_ORDER1;
	let ID_OPER = ID_OPER1;
	let domain = domain1;
	let username1 = username01;
	let password1 = password01;
	let username2 = username02;
	let password2 = password02;
	let cookie = cookie1;

	var obj;
	
	
	let action_delay = 2;
	let basic_delay = 5;
	let end_waite_time = 20;
	let timeout = 120000;

	 //click start , start execute
	 var url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%2FLos_Angeles&ws_id=0&order_id=' + ID_ORDER + '&oper_id=' + ID_OPER + '&oper_name=FILLING_MEASUREMENT_2&action=1';
	 //console.log(url)
	 let data = {};
	 res = http.post(url, JSON.stringify(data),
	 {
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		 "headers": {
	     "Host": `${host}`,
	     "Connection": "keep-alive",
	     "Accept": "application/json, text/plain, */*",
	     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	     "Origin": `http://${host}`,
		  "Referer": `http://${host}/ApemMobile/`,
	     "Accept-Encoding": "gzip, deflate",
	     "Accept-Language": "en-US,en;q=0.9"
		}
	});	

	var test 
	try{
		test = res.json()
	}
	catch(err){
		console.log("##########Phase6", cookie)

		console.log("@@@@@@@@@@@@@@Phase6", JSON.stringify(res))
	}
	if(res.json().result !=null){
		if(res.json().result == 1){
			//request success continue
			console.log(" Phase6 Ready!");
		}
		else{
			//request fail, return
			obj =  res.json();
			printerror("Phase6-1", url, ID_ORDER, ID_OPER, obj);
			return 0;
			
		}
	}
	else{
		obj =  res.json();
		printerror("Phase6-2", url, ID_ORDER, ID_OPER, obj);
		return 0;
	}
	check(res, {"status is 200": (r) => r.status === 200 }); 
	console.log("Phase6 URL",res.request.url,"ERROR",res.error_code,"STATUS",res.status_text,"BODY",res.body);
	var vmname = res.json().mobileScreen.vmName;
	sleep(action_delay);
	


	//Input1
	url = 'http://'+ host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.Component1.F_Actual&targetCompValue=&sourceComp=MEASUREMENT_ENTRY.Component2.F_Actual&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//Input2
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.Component2.F_Actual&targetCompValue=&sourceComp=MEASUREMENT_ENTRY.Component1.F_Actual&sourceCompValue=8.3';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//click OK
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.CmpFooter.txtUserId&targetCompValue=&sourceComp=MEASUREMENT_ENTRY.Component2.F_Actual&sourceCompValue=64.00';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//enter comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=MEASUREMENT_ENTRY.CmpFooter.btnEnterComment&targetCompValue=yes&sourceComp=MEASUREMENT_ENTRY.CmpFooter.txtUserId&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//submit comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=mobileMessageInputDialog&targetCompValue=16&targetCompExtraValue=test6';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//enter username
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.CmpFooter.txtUserId&targetCompValue=&sourceComp=MEASUREMENT_ENTRY.CmpFooter.btnEnterComment&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//submit username1
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.CmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=MEASUREMENT_ENTRY.CmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username1;
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//submit password1
	let encodepassword1 = encoding.b64encode(password1);
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=MEASUREMENT_ENTRY.CmpFooter.pwdSignature&sourceCompValue=' + encodepassword1 + '&sourceCompExtraValue=null';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//submit username2
	url = 'http://'+ host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=MEASUREMENT_ENTRY.CmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=MEASUREMENT_ENTRY.CmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username2;
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	sleep(basic_delay);

	//submit password2
	let encodepassword2 = encoding.b64encode(password2);
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=MEASUREMENT_ENTRY.CmpFooter.pwdSignature&sourceCompValue=' + encodepassword2 + '&sourceCompExtraValue=null';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	if(res.json().result != 1){
		obj =  res.json();
		printerror("Phase6", url, ID_ORDER, ID_OPER, obj);
	}
	//console.log("phase6 URL",res.request.url,"ERROR",res.error_code,"STATUS",res.status_text,"BODY",res.body)
	sleep(basic_delay);

	

};
export {Phase6}


