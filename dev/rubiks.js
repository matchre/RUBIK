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

	/*	Part 1	*/
	
app0 = new Application();

app0.init(700,350, 'container', 'Queue1', 'goQueue', 'StepByStep');
animate(app0);

app0.rubiks.shuffle();

	// Manual turn
	
$('.moves_list td').hover(function() {
	if($(this).css('color') != 'rgb(128, 128, 128)') $(this).stop().css({'background-color': '#a1a4c8'})
},function() {
	$(this).stop().css({'background-color': '#d0d0d7'})
})

$('#turnR').click(function() { 	app0.getRubik().turnRight(-90, .2, false);});
$('#turnR2').click(function() { app0.getRubik().turnRight(-180, .2, false);});
$('#turnR3').click(function() { app0.getRubik().turnRight(90, .2, false);});
$('#turnD').click(function() { 	app0.getRubik().turnDown(90, .2, false);});
$('#turnD2').click(function() { app0.getRubik().turnDown(180, .2, false);});
$('#turnD3').click(function() { app0.getRubik().turnDown(-90, .2, false);});
$('#turnB').click(function() { 	app0.getRubik().turnBack(90, .2, false);});
$('#turnB2').click(function() { app0.getRubik().turnBack(180, .2, false);});
$('#turnB3').click(function() { app0.getRubik().turnBack(-90, .2, false);});

	// Actions
	
$('#Shuffle').click(function() { app0.getRubik().shuffle();});
$('#goQueue').click(function() { app0.getRubik().processQueue();});
$('#StepByStep').click(function() { app0.getRubik().nextStep();});

	// Add to queue
	
$('#QturnR').click(function() { app0.getRubik().turnRight(-90, 0.05, true);});
$('#QturnR2').click(function() { app0.getRubik().turnRight(-180, 0.05, true);});
$('#QturnR3').click(function() { app0.getRubik().turnRight(90, 0.05, true);});
$('#QturnD').click(function() { app0.getRubik().turnDown(90, 0.05, true);});
$('#QturnD2').click(function() { app0.getRubik().turnDown(180, 0.05, true);});
$('#QturnD3').click(function() { app0.getRubik().turnDown(-90, 0.05, true);});
$('#QturnB').click(function() { app0.getRubik().turnBack(90, 0.05, true);});
$('#QturnB2').click(function() { app0.getRubik().turnBack(180, 0.05, true);});
$('#QturnB3').click(function() { app0.getRubik().turnBack(-90, 0.05, true);});

	/*	Part 2	*/

app1 = new Application();

app1.init(700,350, 'container2', 'Queue1', 'goQueue', 'StepByStep');
animate(app1);

app1.rubiks.shuffle();

$('#Shuffle2').click(function() { 
	if($(this).html() == 'Lancer') {
		app1.getRubik().bigShuffle();
		$(this).html('Arrêter');
	}
	else {
		app1.getRubik().stopShuffle();
		$(this).html('Lancer');
	}
});

	/*	Partie 3	*/

app2 = new Application();

app2.init(700,350, 'container3', 'Queue3', 'goQueue3', 'StepByStep3');
animate(app2);

app2.rubiks.shuffle();

$('#turnR-3').click(function() { 	app2.getRubik().turnRight(-90, .2, false);});
$('#turnR2-3').click(function() { app2.getRubik().turnRight(-180, .2, false);});
$('#turnR3-3').click(function() { app2.getRubik().turnRight(90, .2, false);});
$('#turnD-3').click(function() { 	app2.getRubik().turnDown(90, .2, false);});
$('#turnD2-3').click(function() { app2.getRubik().turnDown(180, .2, false);});
$('#turnD3-3').click(function() { app2.getRubik().turnDown(-90, .2, false);});
$('#turnB-3').click(function() { 	app2.getRubik().turnBack(90, .2, false);});
$('#turnB2-3').click(function() { app2.getRubik().turnBack(180, .2, false);});
$('#turnB3-3').click(function() { app2.getRubik().turnBack(-90, .2, false);});

	// Add to queue
	
$('#QturnR-3').click(function() { app2.getRubik().turnRight(-90, 0.05, true);});
$('#QturnR2-3').click(function() { app2.getRubik().turnRight(-180, 0.05, true);});
$('#QturnR3-3').click(function() { app2.getRubik().turnRight(90, 0.05, true);});
$('#QturnD-3').click(function() { app2.getRubik().turnDown(90, 0.05, true);});
$('#QturnD2-3').click(function() { app2.getRubik().turnDown(180, 0.05, true);});
$('#QturnD3-3').click(function() { app2.getRubik().turnDown(-90, 0.05, true);});
$('#QturnB-3').click(function() { app2.getRubik().turnBack(90, 0.05, true);});
$('#QturnB2-3').click(function() { app2.getRubik().turnBack(180, 0.05, true);});
$('#QturnB3-3').click(function() { app2.getRubik().turnBack(-90, 0.05, true);});

$('#Solve3').click(function() { app2.getRubik().solve();});
$('#Shuffle3').click(function() { app2.getRubik().shuffle();});
$('#goQueue3').click(function() { app2.getRubik().processQueue();});
$('#StepByStep3').click(function() { app2.getRubik().nextStep();});