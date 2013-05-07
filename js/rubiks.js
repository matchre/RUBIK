$(document).ready( function() { 
	var message = '';
	if(!Detector.webgl) {
		var version = $.browser.version;
		
		message = 'Attention : WebGL n\'est pas encore activé sur votre navigateur.<br/>';
		
		if ($.browser.webkit == true) message += 'Nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google Chrome</a>.';
		else if ($.browser.mozilla == true) message += 'Sous Mozilla Firefox, tapez <b>about:config</b> dans la barre d\'adresse, et double cliquez sur le champ <b>webgl.force-enabled</b> pour le faire passer à <i>true</i>, puis redémarrez le navigateur.<br/>Pour de meilleurs résultats, nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google Chrome</a>.';
		else if ($.browser.msie == true) message += 'Sous Internet Explorer, WebGL n\'est pas encore disponible.<br/>Nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google chrome</a>.';
		else if ($.browser.opera == true) { 
			if(version < 12) message += 'Veuillez mettre à jour Opera, WebGL n\'est disponible qu\'à partir de la version 12.<br/>Pour de meilleurs résultats, nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google Chrome</a>.';
			else message += 'Faites passer <a href="opera:config#Enable%20Hardware%20Acceleration">opera:config#Enable%20Hardware%20Acceleration</a> et <a href="opera:config#Enable%20WebGL">opera:config#Enable%20WebGL</a> à "1", puis redémarrez le navigateur.<br/>Si cela ne fonctionne toujours pas, nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google Chrome</a>.';
		}
		else message += 'Votre navigateur n\'a pas été reconnu.<br/>Nous vous conseillons d\'utiliser <a href="http://www.google.com/chrome">Google Chrome</a>.';

		$('#webGL_error').html(message);
	}
});

