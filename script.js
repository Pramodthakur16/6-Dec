// 1.
var myVar = 87;

myVar++;

console.log(myVar);

// 2.
 var a;
var b=10;
console.log(a)

a=65;
b=a;
console.log(a) 

// 3.
 var a= 15;
var b= 45;

a += 14;
b += 15;
console.log(b)
console.log(a)

// 4). 

var Sum = 8976 + 2345;
var Difference = 8976 - 2345;
var Multiply = 8976 * 2345;
var Quotient = 8976 / 2345;
var Modulus = 8976 % 2345;

console.log(Sum)
console.log(Difference)
console.log(Multiply)
console.log(Quotient)
console.log(Modulus)

// 5).
 var myVar = 89;
myVar++;
console.log(myVar);

var myVar = 89;
myVar--;
console.log(myVar);

// 6.  strings

var myStr = "Hey there \"I am using Whatsapp\" in \"my laptop\""
 console.log(myStr)

 var myStr = 'Hey there "I am using Whatsapp" in "my laptop"'
 console.log(myStr)

 var myStr = `'Hey there "I am using 'Whatsapp'" in "my laptop"'`
 console.log(myStr)

 var myStr = "Hey there \n\t\b I am using \n \b Whatsapp \t in my laptop"
 console.log(myStr)


// 7.
 var myStr = "Hello " + "world" + ". What an awesome day";
console.log(myStr);


// 8.
 var myStr = "Hello there "; 
myStr += "world";
console.log(myStr);


//  9. 

 var myName = "Pramod Thakur";
var myStr = "my name is " + myName + " and what is your name";
console.log(myStr);


//  10. 

 var firstNameLength = 23;
var firstName = "Pramod";

firstNameLength = firstName.length;
console.log(firstNameLength)

var lastNameLength = 45;
var lastName = "Pramod Thakur";

lastNameLength = lastName.length;
console.log(lastNameLength)


// 11.

 var firstName = "thakur";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName)

var lastName = 'fairyworld';
var thirdLetterOfLastName = lastName[3]
console.log(thirdLetterOfLastName)


var myName = "Kamlesh"
var myStr = "Hello there my name is " + myName + " ,and how are you"
console.log(myStr)

var lastName = "fairytale";
var fifthLetterOflastName = lastName[5]
console.log(fifthLetterOflastName)


function wordBlanks( myAdjective, myNoun, myVerb, myAdverb) {
  var result= "";
  result += "This big "+ myAdjective + " was owned by " + myNoun +"." +"\n The elevator of this skyscrapper " +"" + myVerb +" so " + myAdverb;
return result;

}
console.log(wordBlanks("truck", "mukeshAmbani", "runs", "quickly"));
console.log(wordBlanks("house", "Khanna", "runs", "smoothly"));


// ## Switch statement ##

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter the wrong turn movie peoples ";
      break;
    case "backward":
      whatHappens = "you encounter an apsara ";
      break;
    case "left":
      whatHappens = "you encounter pokemons ";
      break;
    case "right":
      whatHappens = "you encounter some attack titans ";
      break;

    default:
      whatHappens = "please enter a valid direction";

  }
  return whatHappens;
}