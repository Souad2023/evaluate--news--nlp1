import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

console.log(checkForName);


document.getElementById('name').addEventListener('blur', function() {
    const name = document.getElementById('name').value;
    checkForName(name);
});


alert("I EXIST");
console.log("CHANGE!!");

export { onBlur }; 
