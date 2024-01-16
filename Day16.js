/******************************** includes ********************************/

// It is used to check whether a string is containing a specified substring or not.

// The output of includes() method is a boolean value, means either it is true or false.

// Syntax

// console.log( "string".includes("the word") )


/******************************** Example 01 ********************************/

let a = "Ram Sharma"
console.log(a.includes("Sharma")) // The output is true


/******************************** Example 02 ********************************/

let firstName = "Ram"
let lastName = "Sharma"
let fullName = `${firstName} ${lastName}`

if (fullName.includes(lastName)) {
    console.log(`You are including your last name:- "${lastName}"`)
} else {
    console.log('Please include your last name');
}

/********************padEnd html*****************/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let password01 = "Ram";

      if (password01.length == 15) {
        // This means if password01 length is 15
        console.log("Your password01 contains 15 charcters");
      } else {
        let fullPassword = password01.padEnd(15, "*"); // This will make the lenght of the password01 15 buy adding *
        console.log(
          "Your password01 does not contain 15 chacters so we added some more chacters into you password01"
        );
        console.log(`Do you want to show your complete password, then write y`);
        let userInput = prompt("Write here");
        if (userInput == "y") {
          console.log(fullPassword);
        }
      }
    </script>
  </body>
</html>




/******************************** padEnd ********************************/

// It is used to make a specified length of a string using a specified pattern.

// Syntax

// console.log( "string".padEnd(padLimit(a number), "padString") )


/******************************** Example 01 ********************************/

let a = "Ram" // Here the length of a is 6.
console.log(a.padEnd(20, "$")) // This means make the length of a, 20 by adding $  at the end
// The output is Ram$$$$$$$$$$$$$$


/******************************** Example 02 ********************************/

let b = "Ram" // Here the length of a is 6.
console.log(a.padEnd(20)) // In this case padLimit is defined but, padString is not defined, so defaulty spaces are added
// The output is Ram              Here spaces are added


/******************************** Example 03 ********************************/

let password = "Ram"

if (password.length == 15) { // This means if password length is 15
    console.log('Your password contains 15 charcters')
} else {
    password.padEnd(15, "*") // This will make the lenght of the password 15 buy adding *
    console.log('Your password does not contain 15 chacters so we added some more chacters into you password')
}