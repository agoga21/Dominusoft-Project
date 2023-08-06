function validateForm() {
  const nameInput = document.getElementById('name');
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById("name1").innerHTML = "";
  document.getElementById("email1").innerHTML = "";
  document.getElementById("message1").innerHTML = "";

  // Sanitize the name input and restrict it to 20 characters
  let name = nameInput.value.trim();
    const nameRegex = /^[A-Za-z]+$/; // Regular expression to allow only letters

    if (name === '') {
        document.getElementById("name1").innerHTML = "• Please enter your name!";
        document.getElementById("name1").style.color = "red";
        document.getElementById("name1").style.fontSize = "14px";
        return false;
    } else if (!nameRegex.test(name)) {
        document.getElementById("name1").innerHTML = "• Name must contain only letters!";
        document.getElementById("name1").style.color = "red";
        document.getElementById("name1").style.fontSize = "14px";
        return false;
    }  else {
      // Limit the name length to 20 characters
      if (name.length > 20) {
          document.getElementById("name1").innerHTML = "• Name must not exceed 20 characters!";
          document.getElementById("name1").style.color = "red";
          document.getElementById("name1").style.fontSize = "14px";
          return false;
      }
      nameInput.value = name; // Update the input value with the sanitized name
  }

  if (email.trim() === '') {
      document.getElementById("email1").innerHTML = "• Please enter your email!";
      document.getElementById("email1").style.color = "red";
      document.getElementById("email1").style.fontSize = "14px";
      return false;
  } else if (!isValidEmail(email)) {
      document.getElementById("email1").innerHTML = "• Please enter a valid email address!";
      document.getElementById("email1").style.color = "red";
      document.getElementById("email1").style.fontSize = "14px";
      return false;
  }

  if (message.trim() === '') {
      document.getElementById("message1").innerHTML = "• Please enter your message!";
      document.getElementById("message1").style.color = "red";
      document.getElementById("message1").style.fontSize = "14px";
      return false;
  }

  // Update the name input value with the sanitized name
  nameInput.value = name;

  return true;
}

  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  
  //Contact Us Form
 // Function to check if an element is in the viewport
function isInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add a class for the animation when the form is in the viewport
function showFormAnimationOnScroll() {
  const containerForm = document.querySelector('.containerForm');

  if (isInViewport(containerForm)) {
    containerForm.classList.add('show');
  } else {
    containerForm.classList.remove('show'); // Add this line to remove the 'show' class when not in the viewport
  }
}

// Add the scroll event listener to trigger the animation
window.addEventListener('scroll', showFormAnimationOnScroll);

// Trigger the animation once when the page loads
document.addEventListener('DOMContentLoaded', showFormAnimationOnScroll);





//The cards animation
// Function to add a class for the animation
function showAnimation(element) {
  element.classList.add('show');
}

// Trigger the animations when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const containerForm = document.querySelector('.containerForm');
  const figure1 = document.querySelector('.figure1');
  const figure2 = document.querySelector('.figure2');
  const figure3 = document.querySelector('.figure3');

  showAnimation(containerForm);
  showAnimation(figure1);
  showAnimation(figure2);
  showAnimation(figure3);
});






