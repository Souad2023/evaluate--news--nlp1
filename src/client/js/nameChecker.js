export function isValidName(name) {
    const nameRegex = /^[A-Za-z]+$/; 
    return name && name.length > 0 && nameRegex.test(name);
}


function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    
    if (isValidName(inputText)) { 
        alert("Valid input!");
    } else {
        alert("Please enter a valid name.");
    }
}


export { checkForName };