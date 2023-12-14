
// Write a program that accepts an email string and validates that email. 
// If email is valid must display success message and If email is not valid must display error message
// Example:  Input - test01*gmail.com
// 	     Output - Invalid Email Id
// 	     Input - student01@gmail.com
// 	     Output - Valid Email Id


function validateEmail(email) {
    if(email == null) return false;

    const at = email.indexOf('@');
    const dot = email.indexOf('.');
    if(at == -1 || dot == -1 ) {
        return false;
    }
    else return true;
}

var input = "test01@gmail.com"
const result = validateEmail(input);
if(result) {
    console.log('Valid Email Id');
}
else {
    console.log('Invalid Email Id');
}