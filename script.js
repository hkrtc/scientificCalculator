function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
function roundOff (num, places)  {
  const x = Math.pow(10,places);
  return Math.round(num * x) / x;
  }
function cos(form) {

	form.display.value = roundOff(Math.cos(form.display.value),10);
}

function sin(form) {
	form.display.value = roundOff(Math.sin(form.display.value),10);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
/*function nthrt(form) {
 form.display.value = Math.pow(form.display.value);
}*/

function ln(form) {
	form.display.value = Math.log(form.display.value);
}
function log2(form){
	form.display.value = Math.log2(form.display.value);
}
function log10(form){
	form.display.value = Math.log10(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}
function exponent(form) {
	form.display.value = Math.exp(form.display.value);
}
function radians() {
  document.getElementById('rad').parentElement.classList.add("hidden")
  display.value = display.value * (Math.PI / 180);
  
  document.getElementById('deg').parentElement.classList.add("hidden")
  display.value = display.value * (180 / Math.PI);
}
function nthrt(){
	// i am not able to get this function.
}


function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
//var val = 0.0;
//function percent(input) {
  //val = input.value;
  //input.value = input.value + "%";
//}
function percent(input){
  input.value = input.value/100;
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
  // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
  //} else 
    form.display.value = eval(form.display.value);
  }
 


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}
function cube(form){
	form.display.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value) ;
}
function fac(form) {
	var result = 1;
	if (form.display.value === 0) {
	  form.display.value = "1";
	} else if (form.display.value < 0) {
	  form.display.value = "undefined";
	} else {
	  var result = 1;
	  for (var i = form.display.value; i > 0; i--) {
		result = result * i;
	  }
	  form.display.value = result;
	}
  }
  


function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}






