
//Email Validation
  
  function evalid()
  {
    let email=document.getElementById("email");
    let  ev=document.getElementById("ev");
    let regex=/^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regex.test(email.value))
    {
      ev.innerHTML="Email is valid !";
      ev.style.color="green";
  
      return true;
    }
    else
    {
      ev.innerHTML="Oops, Invalid form !";
      ev.style.color="red";
      return false;

    }
  }
//Password validation
function pvalid()
{
  let password=document.getElementById("password");
  let progress=document.getElementById("progress");
  let strength=document.getElementById("strength");
  let count=0;
  if (password.value.length>=8)
  { 
    //alert("len");
    count=count+1;
    
  }
  
  re=/[0-9]/; //checking digit
  if (re.test(password.value))
  {
    //alert("dig");
    count=count+1;
  
  }
  re=/[A-Z]/;// checking for upper case
  if (re.test(password.value))
  {
   // alert("cap");
    count=count+1;
    
  }
  re=/[a-z]/; //checking for lower case
  if (re.test(password.value))
  { 
    //alert("low");
    count=count+1;
    
  }
  switch(count){
    case 1: progress.value=25;
            strength.innerHTML="  strength:poor";
            strength.style.color="red";
            break;
    case 2: progress.value=25;
            strength.innerHTML="  strength:poor";
            strength.style.color="red";
            break;
    case 3: progress.value=50;
            strength.innerHTML="  strength:medium";
            strength.style.color="orange";
            break; 
    case 4: progress.value=100;
            strength.innerHTML="  strength:strong!";
            strength.style.color="green";
            return true;
            break;       
  }
 
  
}
  // basic validations sign in
function bvalid()
{
  let e=document.getElementById("email");
  let p=document.getElementById("password");
  //let c=document.getElementById("check").checked;
  if (p.value.trim()=="" || e.value.trim()=="" )
  {
    noval.innerHTML="Fields can not be empty!";
    noval.style.color="red";
    return false;
  }
  else{
    return true;
  }
}  
