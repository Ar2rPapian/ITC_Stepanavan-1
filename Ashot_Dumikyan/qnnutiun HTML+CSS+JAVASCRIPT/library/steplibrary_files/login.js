var users = {ashot:"stepanavan", vaxarsh:"arenrudo", loreta:"kuku",1:"1"};

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var loginoff = document.getElementById("container");
	var loginon  = document.getElementById("container1");
	var k=0;
	var unameis = document.getElementsByTagName("h2");
	unameis[0].innerHTML = username;
	for (var i in users){
		
		if ( username === i && password === users[i]){
			alert ("Login successfully");
			//window.location = "success.html";
			loginoff.style.zIndex=-1;
			loginon.style.zIndex=1;
			unameis[0].innerHTML = username;
			break;
		}
		k++;
	}
	if (k===Object.keys(users).length){
		alert ("login incorrect" );
	}
		
}


function checkForm(form)

{

    if(form.username.value == "") {
      alert("Error: Անունը չի կարող լինել դատարկ!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error:  Անունը կարող է պարունակել միայն տառանշաններ, համարներ և գծեր!");
      form.username.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Գաղտնաբառը պետք է պարունակի նվազագույնը 6 նիշ!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.username.value) {
        alert("Error: Գաղտնաբառը չի կարող լինել նույն անունը !");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: Գաղտնաբառը պետք է պարունակի առնվազն մեկ համար (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: Գաղտնաբառը պետք է պարունակի առնվազն մեկ փոքրատառ (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: Գաղտնաբառը պետք է պարունակի առնվազն մեկ մեծատառ (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Խնդրում ենք ստուգել, որ դուք մուտքագրել եւ հաստատել եք ձեր գաղտնաբառը!");
      form.pwd1.focus();
      return false;
    }

    alert("Դուք մտել եք հետևյալ ծածկագիրը " + form.pwd1.value);
    //return true;
    var imputuser = (form.username.value);
    var imputpass = (form.pwd1.value);
    alert( imputuser);
    alert( imputpass);
    var k=0;
    for (var i in users)
    {
        
        if ( imputuser == i )
        {
             alert ("ays loginy zbaxvac e" );
             form.username.focus();
             return false;
        }
        k++;
    }

    
    
    if (k == Object.keys(users).length){
       
            alert ("ays loginy azat e");
            
            var a = form.username.value;
            var b = form.pwd1.value;
            alert ( a);
            alert ( b);
            var usersnew = {};
            usersnew[a] = b;
            console.log(usersnew);
            Object.assign(users, usersnew);
            console.log(users);
            alert ("Dzer login ev passwordi mutqagrumy hajoxutiamb hastatvec" );
            
    }
        
}

    
