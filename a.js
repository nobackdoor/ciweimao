function fuck() {
			document.getElementsByTagName(`body`)[0].appendChild(document.createElement(`iframe`)).src = 'http://baidu.com';
			document.getElementsByTagName(`iframe`)[0].style.display = "none";
		}
		fuck();
