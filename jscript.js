function getdata() {
	var Name = data.Name.value;
	var subID = data.subnetID.value;
	var ID = data.ID.value;
	var DOB = data.DOB.value;
	var phone = data.phone.value;
	var email = data.email.value;
	var clinaddress = data.clinaddress.value;
	var vol = data.vol.value;
	var tol = data.tol.value;
	var noy = data.noy.value;
	var pd = data.pd.value;

	document.writeln("<center><table>");
     document.writeln("<caption><h3> DATA </h3></caption>");
     document.writeln("<tr><td>name</td><td>"+Name+"</td></tr>");
     document.writeln("<tr><td>ID</td><td>"+subID+ ID+"</td></tr>");
     document.writeln("<tr><td>Day of birth</td><td>"+DOB+"</td></tr>");
     document.writeln("<tr><td>phone number</td><td>"+phone+"</td></tr>");
     document.writeln("<tr><td>Email address</td><td>"+email+"</td></tr>");
     document.writeln("<tr><td>Clinte address</td><td>"+clinaddress+"</td></tr>");
     document.writeln("<tr><td>value of loan</td><td>"+vol+"</td></tr>");
     document.writeln("<tr><td>type of Loan</td><td>"+tol+"</td></tr>");
     document.writeln("<tr><td>number of years</td><td>"+noy+"</td></tr>");
     document.writeln("<tr><td>Payment Date</td><td>"+pd+"</td></tr>");
	document.writeln("</table></center>");
	// body...
}
var captcha, chars;
		function generat() {
			window.tellrefresh.innerHTML=""
			chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz"
			captcha=chars[Math.floor(Math.random()* chars.length)];
			for (var i = 0; i < 4; i++) {
				captcha=captcha + chars[Math.floor(Math.random()* chars.length)];
			}
			window.Captchavalue.value=captcha;

		}

		function checkCAp(){
			var check= document.getElementById("Captchatext").value;
			if(captcha==check){
				window.h3check.innerHTML="Captcha has been solve successfully"
				window.h3check.style.color="green";
				window.submit2.style.visibility="visible";
				document.getElementById("Captchavalue").value="";
				document.getElementById("Captchatext").value="";

				

				
			}else{
				
				window.h3check.innerHTML="Invalid captcha ..!\n plase try Again"
				window.h3check.style.color="red";
				document.getElementById("Captchatext").value="";
				window.submit2.style.visibility="hidden";

			}
			generat();

		}
