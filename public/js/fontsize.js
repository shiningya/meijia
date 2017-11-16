
	var oFondsize = document.getElementById('newsContent');
	var Fontsize=oFondsize.getElementsByTagName('span');
	var num1 = 16;
	 document.getElementById('small').onclick = function(){
		
		if( num1 >=8 ){
			num1--;
	 	for(var i=0;i<Fontsize.length;i++){

			Fontsize[i].style.fontSize = num1 + 'px';
		}
		}
	};
	document.getElementById('big').onclick = function(){
		  
		if( num1 <= 44 ){
			num1++;
		  for(var i=0;i<Fontsize.length;i++){
		  	
			Fontsize[i].style.fontSize =num1 + 'px';
		  }
		}
	};
//	 document.getElementById('small').onmouseover = function(){
//		document.getElementById('small').className = 'smallOn';
//	};
//	 document.getElementById('small').onmouseout = function(){
//		document.getElementById('small').className = 'smallFont';
//	};
//	document.getElementById('big').onmouseover = function(){
//		document.getElementById('big').className = 'bigOn';
//	};
//	document.getElementById('big').onmouseout = function(){
//		document.getElementById('big').className = 'bigFont';
//	};
