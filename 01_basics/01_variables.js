// Notes:
// Always use let or const for variables
// If variable value can change then use only let 
// If variable value wont changes or not suppose to change use const

let name = 'dilip';
const gender = 'male';
name = 'dil'; //Allowed
gender = 'god' // Assignment to constant variable is now allowed
// var has global scope so not adviced to use it where let has scope