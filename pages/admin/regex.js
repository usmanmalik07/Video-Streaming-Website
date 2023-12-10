
// REGEX
function validateForm() {
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;
 var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordPattern = /^\d{4}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address');
    return false;
  }
  if (!password.match(passwordPattern)) {
    alert('Please enter a valid password');
    return false;
  }
  return true;
}
