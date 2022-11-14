import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("Global", function() {
		let res, redirectUrl, json;
		// Request #0
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #1
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=200&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #2
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=400&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #3
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=600&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #4
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=800&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #5
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=1000&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #6
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=1200&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #7
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=1400&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #8
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=1600&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #9
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=1800&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
		// Request #10
		res = http.post("http://apem-c-d6/ApemMobile/servlet/mobileOrderListServlet?tz=UTC&states=0%7C6%7C3%7C2&init=2000&num=200",
		"",
			{
				"cookies": {
				"JSESSIONID": "5B834338FCB6F9BBFA522F0955B31E45"
			},
			"headers": {
					"Accept": "application/json, text/plain, */*",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9",
					"Connection": "keep-alive",
					"Host": "apem-c-d6",
					"Origin": "http://apem-c-d6",
					"Referer": "http://apem-c-d6/ApemMobile/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
				}
			}
		)
		check(res, {"status is 200": (r) => r.status === 200 });
	});

}
