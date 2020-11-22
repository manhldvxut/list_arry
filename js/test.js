$(function(){
	let select = '';
	let text = "人";
	for (i=1;i<=10;i++){
	    select += '<option val=' + i + '>' + i + text + '</option>';
	}
	$('#options-test').html(select);
});

var e = document.getElementById('options-test');
var d01 =  document.getElementById('num-01');
var d02 =  document.getElementById('num-02');
var d03 =  document.getElementById('num-03');
var d04 =  document.getElementById('num-04');
var d05 =  document.getElementById('num-05');
var num01 = $("#num-01").text();
var num02 = $("#num-02").text();
var num03 = $("#num-03").text();
var num04 = $("#num-04").text();
var num05 = $("#num-05").text();

e.onchange = function(){
     let number = e.value.replace('人', '');
     let sum01 = number * num01;
     let sum02 = number * num02;
     let sum03 = number * num03;
     let sum04 = number * num04;
     let sum05 = number * num05;
     d01.innerHTML = sum01;
     d02.innerHTML = sum02;
     d03.innerHTML = sum03;
     d04.innerHTML = sum04;
     d05.innerHTML = sum05;
};