    var indice = 1;
	mostraImg(indice);
	
	function scorriSld(n){
		mostraImg(indice +=n);
	}
	
	
	function mostraImg(n) {
		var i;
		var s=document.getElementsByClassName("slideP");
		if(n < 1){ indice=s.length;}
		if(n > s.length){indice=1;}
	for(i=0; i<s.length; i++){
		s[i].style.display= "none";
	}
	s[indice-1].style.display= "block";
	}
	
	
	
	/*var documenti = document.getElementsByClassName("menu");
	for(var i=0; i< documenti.length; i++){
		documenti[i].onclick = caricaParte;
	}	
	function caricaParte(e){
       var httpRequest = new XMLHttpRequest();
       httpRequest.onreadystatechange = gestisciResponse;
       httpRequest.open("GET", e.target.innerHTML, true);
       httpRequest.send();	   
    }
	
	function gestisciResponse(e){
		if(e.target.readyState == 4 && e.target.status == 200){
			document.getElementById("zonaDinamica").innerHTML = e.target.responseText;
		
		}
	}*/
	
	
	function loadPage(a){
		var p1Http = new XMLHttpRequest();
		p1Http.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("zonaDinamica").innerHTML = this.responseText
			}
		};
		p1Http.open("GET", a, true);
		p1Http.send();
	}
	
    function vediVoli(){
		if(document.getElementById("dest").value == "Milano"){
			loadVoli("milano.txt");
	}   
	    else if(document.getElementById("dest").value == "Londra"){
			loadVoli("londra.txt");
		}
	    else {alert("Volo non disponibile");}
	}
	function loadVoli(a){
		var p1Http = new XMLHttpRequest();
		p1Http.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("zonaDinamicaVoli").innerHTML = this.responseText;
			}
		};
		p1Http.open("GET", a, true);
		p1Http.send();
	}
	
   function vediResort(){
		if(document.getElementById("dest").value == "corsica"){
			loadResort("corsica.txt");
	}   
	    else if(document.getElementById("dest").value == "dubai"){
			loadResort("dubai.txt");
		}
	    else {alert("Resort non disponibile");}
	}
	function loadResort(a){
		var p1Http = new XMLHttpRequest();
		p1Http.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("zonaDinamicaResort").innerHTML = this.responseText;
			}
		};
		p1Http.open("GET", a, true);
		p1Http.send();
	}