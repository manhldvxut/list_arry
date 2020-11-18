$(function(){
	var select = '';
	var text = "人";
	for (i=1;i<=10;i++){
	    select += '<option val=' + i + '>' + i + text + '</option>';
	    
	   
	}
	$('#options-test').html(select);
	var aaa = $("#aaa").val()

	aaa.change(function(){

	 console.log(aaa)
	})

});