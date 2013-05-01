function createCookie(name,value,days) {
 if (days) {
  var date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
 }
 else var expires = "";
 document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
 var nameEQ = name + "=";
 var ca = document.cookie.split(';');
 for(var i=0;i < ca.length;i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1,c.length);
  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
 }
 return null;
}    
function skip_ad() {
   var s = _e("watch-player").getElementsByTagName("embed")[0].src;
   var v = location.href.split("v=")[1].split("&")[0];
   var w = location.href.split(":")[0]+"://www.youtube.com/v/"+v+"&version=3&autoplay=1&fs=1";
   var x = _e("watch-player").innerHTML;
   var p = x.indexOf(s);
   if (p > -1)
       x = x.substring(0,p)+w+x.substring(p+s.length);
   _e("watch-player").innerHTML = x;
   //alert('skip ad');  
}
function _e(id)
{
	return document.getElementById(id);
}
function runantiad() {
	if (_e("watch-player")) {
		//alert('ok on skip ad!');
		skip_ad();
	}else{
		//alert('pas ok');
		//alert(document.getElementById("watch-player"));
		
	}
}
window.setTimeout('runantiad();',500);

//runantiad();

function getXDomainRequest() {
        var xdr = null;
        if (window.XDomainRequest) {
                xdr = new XDomainRequest();
                console.log("Votre navigateur gère XDomainRequest !"); 
        } else if (window.XMLHttpRequest) {
                xdr = new XMLHttpRequest();
                console.log("Votre navigateur gère XMLHttpRequests !"); 
        } else {
                console.log("Votre navigateur ne gère pas l'AJAX cross-domain !");
        }
        
        return xdr;        
}

function doRequest(){
    var xdr = getXDomainRequest();
    xdr.onload = function() {
            console.log(xdr.responseText);
    }
    xdr.open("GET", "http://pubcatcher.fr/lib/counter.php");
    xdr.send();
}

var now = new Date();
var today = now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();

if (readCookie('ppkcookierqst') == null) {
    createCookie('ppkcookierqst',today,365);   
    doRequest();
} else{
    if(readCookie('ppkcookierqst')!=today){ 
          createCookie('ppkcookierqst',today,365);   
          doRequest();
    }
}