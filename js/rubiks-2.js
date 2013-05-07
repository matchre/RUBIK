/*  Part 2  */

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