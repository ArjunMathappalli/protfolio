function download(file){
    const myFile = new File([`${new Date()}: Meow!`], "my-cat.txt");
}

function ValidateEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form.text.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form.text.focus();
  
      return false;
  
    }
  
  }