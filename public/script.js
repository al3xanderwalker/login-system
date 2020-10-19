$('#email').keyup(function () {
  if ($(this).val() == '') displayValid($(this), 'rgb(99, 145, 243)');
  else if (validateEmail($(this).val())) displayValid($(this), '#15d642');
  else displayValid($(this), 'red');
});
$('#password').keyup(function () {
  if ($(this).val() == '') displayValid($(this), 'rgb(99, 145, 243)');
  else if (validatePassword($(this).val())) displayValid($(this), '#15d642');
  else displayValid($(this), 'red');
});
$('#name').keyup(function () {
  if ($(this).val() == '') displayValid($(this), 'rgb(99, 145, 243)');
  else if (validateName($(this).val())) displayValid($(this), '#15d642');
  else displayValid($(this), 'red');
});
function displayValid(input, color) {
  input.css('border-bottom', `2px solid ${color}`);
  input.siblings('.placeholder').css('color', color);
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return re.test(String(password));
}
function validateName(name) {
  const re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  console.log(re.test(String(name)));
  return re.test(String(name));
}
function ValidateForm() {
  if (!validateName($('#name').val())) return false;
  if (!validateEmail($('#email').val())) return false;
  if (!validatePassword($('#password').val())) return false;
}
