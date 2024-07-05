const submit_button = document.querySelector(".button");
// "e" is used to stop auto submit...
debugger
submit_button.onclick = (e) => {
    e.preventDefault();
    // all he input data has been received this variables....
    // got all the elements.....
   const fname = document.getElementById("fname").value;
   const lname = document.getElementById("lname").value;
   const email = document.getElementById("email").value;
   const pass = document.getElementById("pass").value;
   const cpass = document.getElementById("cpass").value;

   // now storing this data in our web browser store-----
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    
    // here are some of the conditions....
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass ==""){
       // alert("Input field has no value");
        // we could change the alert system....
        swal("Opps!", "Input field has no value!", "error");
    }
    else
    {
      if(pass.length >= 6 && pass.length <= 20)
     {
      if( pass !== cpass){
         // Swal('Opps..!','Password not matching!','error');
          alert('password not matching');
      }
      else{
        //  Swal( 'Good job!', 'Register successful!','success' );
        alert('your registration has been sucessful');
      }
     }
    
  else{
     // Swal( 'Opps..!','Input mim six digit password!','error' );
     alert('your password should be min 6 digits');
  }
  }  
    
}

// password visibulity function .......
var state= false;
function toggle11(){
  if(state){
    document.getElementById("pass").setAttribute("type", "password");
    document.getElementById("eye11").style.color='#e3e1ec';
    state = false;
  }
  else{
    document.getElementById("pass").setAttribute("type", "text");
    document.getElementById("eye11").style.color='#e3e1ec';
    state = true;
  }
} 
var state= false;
function toggle22(){
  if(state){
    document.getElementById("cpass").setAttribute("type", "password");
    document.getElementById("eye22").style.color='#e3e1ec';
    state = false;
  }
  else{
    document.getElementById("cpass").setAttribute("type", "text");
    document.getElementById("eye22").style.color='#e3e1ec';
    state = true;
  }
} 