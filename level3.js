//LEVEL 3

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
    if(n % 5 == 0){
        return true
    }else
    return false

    }
// console.log(divisibleByFive(99))
//****************************************************************************************************** */

//Write a function that returns the length of a string. Make your function recursive.

function length(str) {
	return str.length;
}
// console.log(length("behnam shahrabadi"));
//*********************************************************************************************************

//Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
function divisible(num) {
if(num % 100  == 0){
    return true;
}else
return false;

}

// console.log(divisible(1000))
//************************************************************************************************************ */

//The Math.abs() function returns the absolute value of a number.
//This means that it returns a number's positive value. You can think of it as the distance away from zero.
//Create a function that recreates this functionality.

function absolute(n) {
	if(n<0){
		return n*-1;
	}else{
		return n;
	}
}
// console.log(absolute(-84.48));
//****************************************************************************************************************** */

//Create a function that takes a string and returns it as an integer.

function stringInt(str) {
	return Number(str);
}
// console.log("i will be success")
// console.log(typeof(str))
//********************************************************************************************************************* *

//Create a function that takes an equation (e.g. "1+1"), and returns the answer.

function equation(s) {
    return eval(s)
}
// console.log(equation("3*2+4"));
// console.log(typeof(s))
//********************************************************************************************************* */

//Create a function that evaluates an equation.

function eq(evaluate) {
    return eval(evaluate)
}
// console.log(2*33)
//*********************************************************************************************************** */

//A bartender is writing a simple program to determine whether he should serve drinks to someone.
// He only serves drinks to people 18 and older and when he's not on break.
//Given the person's age, and whether break time is in session,
// create a function which returns whether he should serve drinks

function shouldServeDrinks(age, onBreak) {
    if(age >= 18 && onBreak == false){
        return "you are eligible to drink"
    }else{
        return "fuck off "
    }

}
// console.log(shouldServeDrinks(17,true))
//*********************************************************************************************************************** */

//Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	
	return lastName.concat(',',firstName);
}
// console.log(concatName("behnam", "coder"))
//********************************************************************************************************************* */

//Write a function that checks whether a person can watch an MA15+ rated movie. 
//One of the following two conditions is required for admittance:
//The person is at least 15 years old.
//They have parental supervision.
//The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
	if(age >=15 || isSupervised === true){
        return true
    }else{
        return false
    }
}
// console.log(acceptIntoMovie(10, false))
//*************************************************************************************************************** */


//The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all
// and you failed to mention this detail to them.
// This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.
//Given an object with always the exact same 3 keys, return a string that concatenates all the 
//values and adds the 2nd key at the end. Make sure you keep an empty space between them but not
// at the beginning or end of the string. Look at the examples for a clearer picture.


function sayWhat(obj) {
    //  return obj.name.concat(obj.bless,obj.doa)

    return obj.name +" "+ obj.bless +" "+  obj.doa +" "+obj.bless;
    

}

console.log(sayWhat({ name: "god", bless: "please", doa: "help" }))
//not solved yet            