var addn=document.getElementById("add");
var sub=document.getElementById('sub');
var mul=document.getElementById('mul');
var divd=document.getElementById('divd');
var input1=document.getElementById("n1");
var n1=parseInt(input1.value);
var input2=document.getElementById("n2");
var n2=parseInt(input2.value);
var reset=document.getElementById("reset");

//defining action on clicking
function output(){

	addn.textContent="Addition";
	sub.textContent="Subtraction";
	mul.textContent="Multiplication";
	divd.textContent="Division";

	var n1=parseInt(input1.value);
    var n2=parseInt(input2.value);

    addn.addEventListener("click",function(){
	addn.textContent=n1+n2;		
})

sub.addEventListener("click",function(){
	sub.textContent=n1-n2;
})

mul.addEventListener("click",function(){
	mul.textContent=n1*n2;
})

divd.addEventListener("click",function(){
	divd.textContent=n1/n2;
})
}

output();

//when input changes
input1.addEventListener("change",output);

input2.addEventListener("change",output);

//when "reset" button is clicked
reset.addEventListener("click",output);

