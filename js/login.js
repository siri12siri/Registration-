const login = document.querySelector('.login');
login.onclick = (e) => {
  e.preventDefault();
  // get the values which is type user login page...
  const emailAddress = document.getElementById("emailAddress");
  const passWord = document.getElementById("passWord");
  // get the value in localstorage which stores user registration form...
  const Email = localStorage.getItem("Email");
  const password = localStorage.getItem("Password");
  console.log('emailAddress', emailAddress);
  console.log('passWord', passWord);
  if(emailAddress.value == "" && passWord.value == ""){
    swal("Opps!", "Input field has no value!", "error");
    //alert("field is empty");
  }
  else {
    if (emailAddress.value == Email && passWord.value == password){
      swal("Good job!", "Your login is successful!", "success");
      // alert("sucess");
    }
    else {
      swal("Opps!", "Something is wrong!", "error");
      //alert("smtng is wrong");
    }
  }
}
