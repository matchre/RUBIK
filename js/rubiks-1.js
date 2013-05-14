    /*  Part 1  */



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

$('#turnR').click(function() {  app0.getRubik().turnRight(-90, .2, false);});
$('#turnR2').click(function() { app0.getRubik().turnRight(-180, .2, false);});
$('#turnR3').click(function() { app0.getRubik().turnRight(90, .2, false);});
$('#turnD').click(function() {  app0.getRubik().turnDown(90, .2, false);});
$('#turnD2').click(function() { app0.getRubik().turnDown(180, .2, false);});
$('#turnD3').click(function() { app0.getRubik().turnDown(-90, .2, false);});
$('#turnB').click(function() {  app0.getRubik().turnBack(90, .2, false);});
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
