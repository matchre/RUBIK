/*  Partie 3    */

app2 = new Application();

app2.init(700,350, 'container3', 'Queue3', 'goQueue3', 'StepByStep3');
animate(app2);

app2.rubiks.shuffle();

$('#turnR-3').click(function() {    app2.getRubik().turnRight(-90, .2, false);});
$('#turnR2-3').click(function() { app2.getRubik().turnRight(-180, .2, false);});
$('#turnR3-3').click(function() { app2.getRubik().turnRight(90, .2, false);});
$('#turnD-3').click(function() {    app2.getRubik().turnDown(90, .2, false);});
$('#turnD2-3').click(function() { app2.getRubik().turnDown(180, .2, false);});
$('#turnD3-3').click(function() { app2.getRubik().turnDown(-90, .2, false);});
$('#turnB-3').click(function() {    app2.getRubik().turnBack(90, .2, false);});
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
