
		function userinput(b){
			document.getElementById('input1').value+=b;

		}
		function backspace(calc) {											 
			size = document.getElementById('input1').value.length; 
			document.getElementById('input1').value = document.getElementById('input1').value.substring(0, size-1);

		} 
		function clr() {
			document.getElementById('input1').value="";

		}
		function calculate() { 
				var x=document.getElementById('input1').value;
				var y=eval(x);
				document.getElementById('input1').value=y;	
				
		} 
		