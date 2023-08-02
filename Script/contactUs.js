function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById("name1").innerHTML = "";
    document.getElementById("email1").innerHTML = "";
    document.getElementById("message1").innerHTML = "";
  
    if (name.trim() === '') {
      document.getElementById("name1").innerHTML = "• Please enter your name!";
      document.getElementById("name1").style.color="red";
      document.getElementById("name1").style.fontSize="14px";
      return false;
    }
  
    if (email.trim() === '') {
        document.getElementById("email1").innerHTML = "• Please enter your email!";
        document.getElementById("email1").style.color="red";
        document.getElementById("email1").style.fontSize="14px";
      return false;
    } else if (!isValidEmail(email)) {
        document.getElementById("email1").innerHTML = "• Please enter a valid email address!";
        document.getElementById("email1").style.color="red";
        document.getElementById("email1").style.fontSize="14px";
      return false;
    }
  
    if (message.trim() === '') {
        document.getElementById("message1").innerHTML = "• Please enter your message!";
        document.getElementById("message1").style.color="red";
        document.getElementById("message1").style.fontSize="14px";
      
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  