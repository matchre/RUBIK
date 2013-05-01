<!doctype html>
<html lang="fr">
<head>
	<title>Rubik's Cube 2x2x2</title>
</head>

<style>
		.moves_list {
			width::100%;
			margin:auto;
		}
		
		.moves_list td {
			width:1%;
			text-align:center;
			background-color:#d0d0d7;
			border-width:1px;
			border-style:solid;
			border-color:#bbbbc6;
			cursor:pointer;
		}
		
		.queue {
			width:100%;
			background-color:#d0d0d7;
			border-width:1px;
			border-style:solid;
			border-color:#bbbbc6;
			height:25px;
			text-align:center;
		}
		
		.rubik_title {
			font-weight:bold;
			text-align:center;
		}
		
		#webGL_error {
			width:100%;
			color:red;
			text-align:center;
		}
	</style>
	
<body>

<div style="margin:auto;width:720px;background-color:#e5e6ef;">
	<div id="webGL_error"></div>
	
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo sit amet lectus suscipit dictum in quis nulla. Maecenas vitae quam ipsum. Aenean vel massa sed nulla tristique semper ut sed nisi. Phasellus felis erat, dictum a dapibus eu, tempor vehicula lectus. Vivamus vitae nisl non purus condimentum congue et eu mi. Integer vitae mauris tincidunt turpis varius pretium. Sed lacus massa, suscipit eu consectetur at, ultrices ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
	<br/>
	Vivamus sed dolor leo. Morbi in luctus sem. Suspendisse aliquet ante a nulla vehicula vestibulum. Ut pellentesque molestie varius. Quisque at arcu eget sapien ultricies semper eget a massa. Vivamus vitae hendrerit ligula. Duis lacus sapien, tempus sit amet interdum ut, posuere non justo. In hac habitasse platea dictumst. Pellentesque sodales tempor volutpat. Nulla facilisi. Vestibulum est magna, suscipit eu aliquet id, malesuada id justo. Vivamus commodo sodales aliquam. Morbi vestibulum lobortis velit id scelerisque. Duis et vestibulum nibh. In hac habitasse platea dictumst.<br/>
	<br/>
	Maecenas non malesuada quam. Duis ullamcorper, elit sit amet fermentum placerat, leo lectus sodales mi, eu gravida tellus lectus vel risus. Sed blandit vestibulum diam, eu luctus leo eleifend at. Mauris augue odio, tincidunt pretium sodales et, mattis eu augue. Sed placerat suscipit magna in faucibus. In eu diam erat. Vivamus id leo turpis, ut imperdiet turpis. Vestibulum libero nisi, pellentesque ac convallis ac, elementum at quam. Donec mi felis, pulvinar vel pellentesque sit amet, dignissim ut sem. Cras porta mattis velit, in facilisis augue facilisis a. Vestibulum molestie tortor metus. Sed in augue id leo bibendum lacinia. Nullam viverra, felis eget volutpat convallis, dolor odio tempus sem, et tristique sapien mi ultricies elit. Quisque adipiscing tempor faucibus.<br/>
	<br/>
	Nunc quis orci eu lectus imperdiet gravida. Fusce dictum dolor id nisi ultricies vel placerat felis semper. Mauris sed magna metus, non dictum ante. Aenean ultricies erat vel arcu pellentesque quis vestibulum justo porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur semper sollicitudin elit vitae sollicitudin. Nunc mi orci, dictum vel dapibus ac, consequat sed sem. Suspendisse auctor porta tincidunt. Aliquam erat volutpat.<br/>
	<br/>
	Suspendisse eget leo a purus venenatis commodo at sed lorem. Praesent elementum, neque eget ornare pretium, dolor ipsum dictum nisi, a tristique dui nibh sit amet lacus. Proin sit amet dui ut magna porttitor lacinia. Aenean consequat augue ut enim mattis scelerisque semper velit aliquam. Nulla facilisi. Pellentesque sed purus justo. Nunc porttitor venenatis odio, ut rutrum massa aliquet a. Sed sed mattis orci. Nunc eu nulla sem, sit amet porta urna. Proin non ante nunc, commodo mattis felis. <br/>
	<br/>

	<div id="part1"><?php include('part1.php'); ?></div>
	<br/>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo sit amet lectus suscipit dictum in quis nulla. Maecenas vitae quam ipsum. Aenean vel massa sed nulla tristique semper ut sed nisi. Phasellus felis erat, dictum a dapibus eu, tempor vehicula lectus. Vivamus vitae nisl non purus condimentum congue et eu mi. Integer vitae mauris tincidunt turpis varius pretium. Sed lacus massa, suscipit eu consectetur at, ultrices ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
	<br/>
	Vivamus sed dolor leo. Morbi in luctus sem. Suspendisse aliquet ante a nulla vehicula vestibulum. Ut pellentesque molestie varius. Quisque at arcu eget sapien ultricies semper eget a massa. Vivamus vitae hendrerit ligula. Duis lacus sapien, tempus sit amet interdum ut, posuere non justo. In hac habitasse platea dictumst. Pellentesque sodales tempor volutpat. Nulla facilisi. Vestibulum est magna, suscipit eu aliquet id, malesuada id justo. Vivamus commodo sodales aliquam. Morbi vestibulum lobortis velit id scelerisque. Duis et vestibulum nibh. In hac habitasse platea dictumst.<br/>
	<br/>
	Maecenas non malesuada quam. Duis ullamcorper, elit sit amet fermentum placerat, leo lectus sodales mi, eu gravida tellus lectus vel risus. Sed blandit vestibulum diam, eu luctus leo eleifend at. Mauris augue odio, tincidunt pretium sodales et, mattis eu augue. Sed placerat suscipit magna in faucibus. In eu diam erat. Vivamus id leo turpis, ut imperdiet turpis. Vestibulum libero nisi, pellentesque ac convallis ac, elementum at quam. Donec mi felis, pulvinar vel pellentesque sit amet, dignissim ut sem. Cras porta mattis velit, in facilisis augue facilisis a. Vestibulum molestie tortor metus. Sed in augue id leo bibendum lacinia. Nullam viverra, felis eget volutpat convallis, dolor odio tempus sem, et tristique sapien mi ultricies elit. Quisque adipiscing tempor faucibus.<br/>
	<br/>
	Nunc quis orci eu lectus imperdiet gravida. Fusce dictum dolor id nisi ultricies vel placerat felis semper. Mauris sed magna metus, non dictum ante. Aenean ultricies erat vel arcu pellentesque quis vestibulum justo porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur semper sollicitudin elit vitae sollicitudin. Nunc mi orci, dictum vel dapibus ac, consequat sed sem. Suspendisse auctor porta tincidunt. Aliquam erat volutpat.<br/>
	<br/>
	Suspendisse eget leo a purus venenatis commodo at sed lorem. Praesent elementum, neque eget ornare pretium, dolor ipsum dictum nisi, a tristique dui nibh sit amet lacus. Proin sit amet dui ut magna porttitor lacinia. Aenean consequat augue ut enim mattis scelerisque semper velit aliquam. Nulla facilisi. Pellentesque sed purus justo. Nunc porttitor venenatis odio, ut rutrum massa aliquet a. Sed sed mattis orci. Nunc eu nulla sem, sit amet porta urna. Proin non ante nunc, commodo mattis felis. <br/>
	<br/>

	<div id="part2"><?php include('part2.php'); ?></div>
	<br/>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo sit amet lectus suscipit dictum in quis nulla. Maecenas vitae quam ipsum. Aenean vel massa sed nulla tristique semper ut sed nisi. Phasellus felis erat, dictum a dapibus eu, tempor vehicula lectus. Vivamus vitae nisl non purus condimentum congue et eu mi. Integer vitae mauris tincidunt turpis varius pretium. Sed lacus massa, suscipit eu consectetur at, ultrices ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
	<br/>
	Vivamus sed dolor leo. Morbi in luctus sem. Suspendisse aliquet ante a nulla vehicula vestibulum. Ut pellentesque molestie varius. Quisque at arcu eget sapien ultricies semper eget a massa. Vivamus vitae hendrerit ligula. Duis lacus sapien, tempus sit amet interdum ut, posuere non justo. In hac habitasse platea dictumst. Pellentesque sodales tempor volutpat. Nulla facilisi. Vestibulum est magna, suscipit eu aliquet id, malesuada id justo. Vivamus commodo sodales aliquam. Morbi vestibulum lobortis velit id scelerisque. Duis et vestibulum nibh. In hac habitasse platea dictumst.<br/>
	<br/>
	Maecenas non malesuada quam. Duis ullamcorper, elit sit amet fermentum placerat, leo lectus sodales mi, eu gravida tellus lectus vel risus. Sed blandit vestibulum diam, eu luctus leo eleifend at. Mauris augue odio, tincidunt pretium sodales et, mattis eu augue. Sed placerat suscipit magna in faucibus. In eu diam erat. Vivamus id leo turpis, ut imperdiet turpis. Vestibulum libero nisi, pellentesque ac convallis ac, elementum at quam. Donec mi felis, pulvinar vel pellentesque sit amet, dignissim ut sem. Cras porta mattis velit, in facilisis augue facilisis a. Vestibulum molestie tortor metus. Sed in augue id leo bibendum lacinia. Nullam viverra, felis eget volutpat convallis, dolor odio tempus sem, et tristique sapien mi ultricies elit. Quisque adipiscing tempor faucibus.<br/>
	<br/>
	Nunc quis orci eu lectus imperdiet gravida. Fusce dictum dolor id nisi ultricies vel placerat felis semper. Mauris sed magna metus, non dictum ante. Aenean ultricies erat vel arcu pellentesque quis vestibulum justo porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur semper sollicitudin elit vitae sollicitudin. Nunc mi orci, dictum vel dapibus ac, consequat sed sem. Suspendisse auctor porta tincidunt. Aliquam erat volutpat.<br/>
	<br/>
	Suspendisse eget leo a purus venenatis commodo at sed lorem. Praesent elementum, neque eget ornare pretium, dolor ipsum dictum nisi, a tristique dui nibh sit amet lacus. Proin sit amet dui ut magna porttitor lacinia. Aenean consequat augue ut enim mattis scelerisque semper velit aliquam. Nulla facilisi. Pellentesque sed purus justo. Nunc porttitor venenatis odio, ut rutrum massa aliquet a. Sed sed mattis orci. Nunc eu nulla sem, sit amet porta urna. Proin non ante nunc, commodo mattis felis. <br/>
	<br/>

	<div id="part3"><?php include('part3.php'); ?></div>
	<br/>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo sit amet lectus suscipit dictum in quis nulla. Maecenas vitae quam ipsum. Aenean vel massa sed nulla tristique semper ut sed nisi. Phasellus felis erat, dictum a dapibus eu, tempor vehicula lectus. Vivamus vitae nisl non purus condimentum congue et eu mi. Integer vitae mauris tincidunt turpis varius pretium. Sed lacus massa, suscipit eu consectetur at, ultrices ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
	<br/>
	Vivamus sed dolor leo. Morbi in luctus sem. Suspendisse aliquet ante a nulla vehicula vestibulum. Ut pellentesque molestie varius. Quisque at arcu eget sapien ultricies semper eget a massa. Vivamus vitae hendrerit ligula. Duis lacus sapien, tempus sit amet interdum ut, posuere non justo. In hac habitasse platea dictumst. Pellentesque sodales tempor volutpat. Nulla facilisi. Vestibulum est magna, suscipit eu aliquet id, malesuada id justo. Vivamus commodo sodales aliquam. Morbi vestibulum lobortis velit id scelerisque. Duis et vestibulum nibh. In hac habitasse platea dictumst.<br/>
	<br/>
	Maecenas non malesuada quam. Duis ullamcorper, elit sit amet fermentum placerat, leo lectus sodales mi, eu gravida tellus lectus vel risus. Sed blandit vestibulum diam, eu luctus leo eleifend at. Mauris augue odio, tincidunt pretium sodales et, mattis eu augue. Sed placerat suscipit magna in faucibus. In eu diam erat. Vivamus id leo turpis, ut imperdiet turpis. Vestibulum libero nisi, pellentesque ac convallis ac, elementum at quam. Donec mi felis, pulvinar vel pellentesque sit amet, dignissim ut sem. Cras porta mattis velit, in facilisis augue facilisis a. Vestibulum molestie tortor metus. Sed in augue id leo bibendum lacinia. Nullam viverra, felis eget volutpat convallis, dolor odio tempus sem, et tristique sapien mi ultricies elit. Quisque adipiscing tempor faucibus.<br/>
	<br/>
	Nunc quis orci eu lectus imperdiet gravida. Fusce dictum dolor id nisi ultricies vel placerat felis semper. Mauris sed magna metus, non dictum ante. Aenean ultricies erat vel arcu pellentesque quis vestibulum justo porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur semper sollicitudin elit vitae sollicitudin. Nunc mi orci, dictum vel dapibus ac, consequat sed sem. Suspendisse auctor porta tincidunt. Aliquam erat volutpat.<br/>
	<br/>
	Suspendisse eget leo a purus venenatis commodo at sed lorem. Praesent elementum, neque eget ornare pretium, dolor ipsum dictum nisi, a tristique dui nibh sit amet lacus. Proin sit amet dui ut magna porttitor lacinia. Aenean consequat augue ut enim mattis scelerisque semper velit aliquam. Nulla facilisi. Pellentesque sed purus justo. Nunc porttitor venenatis odio, ut rutrum massa aliquet a. Sed sed mattis orci. Nunc eu nulla sem, sit amet porta urna. Proin non ante nunc, commodo mattis felis. <br/>
	<br/>
</div>

<!-- Includes -->

<script src="js/jquery.js"></script>
<script src="js/Three.js"></script>
<script src="js/Detector.js"></script>
<script src="js/Stats.js"></script>
<script src="js/THREEx.KeyboardState.js"></script>
<script src="js/THREEx.FullScreen.js"></script>
<script src="js/THREEx.WindowResize.js"></script>

<script src="functions.js"></script>
<script src="Action.class.js"></script>
<script src="Rubik.class.js"></script>
<script src="Cube.class.js"></script>
<script src="Application.class.js"></script>
<script src="rubiks.js"></script>

<script>
<?php
	$fichier='table.txt';
	$contenu = fread(fopen($fichier, "r"), filesize($fichier));
	echo 'indexTable = "'.$contenu.'";'; 
?>

</script>

</body>
</html>
