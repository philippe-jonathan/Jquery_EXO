var count =0;

$('#PLUS').click(function(){
	count++;
	$('#counter').html(count);
});

$('#MOINS').click(function(){
	count--;
	$('#counter').html(count);
});