//LEVEL 2
//Write a function that takes two integers (hours, minutes),
// converts them to seconds, and adds them.

function convert(hours, minutes) {
	return hours*(60*60)+minutes*(1*60)
}

// console.log(" 1 hour and 60 minutes is " + convert(1,20) + " seconds" );

// *******************************************************************************
//Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.

function lessThan100(a, b) {
    	if(a + b < 100){
                return true;
            }else{
                    return false;
                }
            }
//           console.log("the sum of the two number less than 100 is "+ lessThan100(49,47));
// *******************************************************************************


//In this challenge, you must verify the equality of two different values given the parameters a and b.
//Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
//Numbers
//Strings
//Booleans (false or true)
//Special values: undefined, null and NaN
//Implement a function that returns true if the parameters are equal, and false if they are not.
function checkEquality(a, b) {
if(a === b){
    return true;
}else{
    return false;
}
  
}

// console.log(checkEquality(100,"behnam"))
//********************************************************************************

//Write a function that converts hours into seconds.
function howManySeconds(hours) {
    var convertToMinute = hours*60;
    var convertTosecond =convertToMinute*60;
	return hours*convertTosecond
}
//console.log(howManySeconds(1));
//*********************************************************************************

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	return num +=1
}

//console.log(addition(4));
//**********************************************************************************

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
// This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(votes){
return votes.downVotes-votes.upVotes;
}


// console.log(getVoteCount({upVotes:84,downVotes:88}))
//*********************************************************************************

//Create a function that takes three arguments prob, prize, pay
// and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
	if(prob * prize > pay){
        return true
    }else{
        return false
    }
}
// console.log(profitableGamble(88,22,99));
//*************************************************************************************

//JavaScript has a logical operator &&. The && operator takes two boolean values, 
//and returns true if both values are true.
//Consider a && b:
//a is checked if it is true or false.
//If a is false, false is returned.
//b is checked if it is true or false.
//If b is false, false is returned.
//Otherwise, true is returned (as both a and b are therefore true ).
//The && operator will only return true for true && true.
//Make a function using the && operator.
function and(a, b) {
    
    return a && b;
}
// console.log(and(true,true));
//*****************************************************************************************

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
//(side1 + side2) - 1 = maximum range of third edge.
//The side lengths of the triangle are positive integers.


function nextEdge(side1, side2) {
	return (side1+side2)-1
}

// console.log(nextEdge(84,22));
//******************************************************************************************

//Create a function that takes two strings as arguments and return either true or false depending on whether
//the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
	if(str1.length == str2.length){
        return true
    }else{
        return false
    }
}

// console.log(comp("behnam","aiereen"))
//************************************************************************************************
//Create a function that takes the number of wins, draws and losses 
//and calculates the number of points a football team has obtained so far.
//wins get 3 points
//draws get 1 point
//losses get 0 points
function footballPoints(wins, draws, losses) {
    var winsPoint = wins*3;
    var drawsPoint =draws*1;
    var lossesPoint = losses*0;
    return winsPoint+drawsPoint+lossesPoint;
    
}
// console.log(footballPoints(4,2,1))
//****************************************************************************************************

//Write a function that returns the string "something" joined with a space " " and the given argument a.
//Assume an input is given.

function giveMeSomething(a) {
	return a + "" + " is better than nothing";
}

// console.log(giveMeSomething("someting"));
//********************************************************************************************************

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero,
//otherwise return false.
function lessThanOrEqualToZero(num) {
	if(num <=0){
        return true
    }else{
        return false
    }
}
// console.log(lessThanOrEqualToZero(-1))
//************************************************************************************************************

//Create a function that returns true if a string is empty and false otherwise.
//A string containing only whitespaces " " does not count as empty.
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

function isEmpty(s) {
	if(s == ""){
        return true
    }else{
        return false
    }
}
// console.log(isEmpty(""))
//**************************************************************************************************************

//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
//a will always be greater than or equal to b.
function dividesEvenly(a, b) {
	return a % b == 0
}
// console.log(dividesEvenly(100,100))
//***************************************************************************************

//in this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
// The farmer breeds three species:
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. 
//You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
    var chikensLeg = 2;
    var cowsLeg = 4;
    var pigsLegs = 4;
return (chickens*chikensLeg) + (cows*cowsLeg) + (pigs*pigsLegs);
}
// console.log(animals(4,6,8));
//**********************************************************************************

//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

function frames(minutes, fps) {
    var convMinute = minutes*60;
    return convMinute*fps;
}

// console.log(frames(10,10))
//*************************************************************************************************

//The challenge is to try and fix this buggy code, given the inputs true and false.
// See the examples below for the expected output.

function has_bugs(buggy_code) {
	if (buggy_code == true) {
		return 'sad days'
	} else {
        return 'it\'s a good day'
        
	}
}
console.log(has_bugs(false))