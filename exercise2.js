// 1.Write a JavaScript function to print the “Hello World” message

var print="Hello World"; 
 console.log(print); 



// 2.Write a function that returns the square of a number
function findSquare(num) {
    return num*num;
  }
  
  console.log(findSquare(9)) //81
  console.log(findSquare(10)) //100
 


//3. Write a function to convert Celsius to Fahrenheit

  function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104

// 4. Write a function to find the area of a given Rectangle
  function rectangleArea(a,b) {
    return `The area of rectangle is ${a*b}`;
  }
  
  console.log(rectangleArea(10,30)) //The area of rectangle is 300
  console.log(rectangleArea(30,40)) //The area of rectangle is 1200


// 5. Write a function to find the area and perimeter of a Circle  
  function circleValues(rad) {
    return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
  }
  
  console.log(circleValues(20)) //"Perimeter: 125.66370614359172, Area: 1256.6370614359173"
  console.log(circleValues(22)) //"Perimeter: 138.23007675795088, Area: 1520.5308443374597"
  console.log(circleValues(30)) //"Perimeter: 188.49555921538757, Area: 2827.4333882308138"

// 6.Write a function to reverse a number
function reverseNum(num) {
  var reverse = 0;
  while(num != 0)
  {
    reverse = reverse * 10;
    reverse = reverse + num%10;
    num = Math.trunc(num/10); // Remove decimal places
  }
  return reverse;
}

console.log(reverseNum(1234)) //4321
console.log(reverseNum(5678)) //8765


// 7. Count number of Vowels in String

function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }
  
  console.log(countVowel("Friendship")) //3
  console.log(countVowel("Neighbour")) //4

// 8.Flatten array of arrays using JavaScript reduce

function flattenArr(arr) {
    return arr.reduce((result, array) => result.concat(array));
  }
  
  console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//  9. Write a function to calculate simple interest based on the principle amount

function compoundInt(principle, rate, time, n) {
    var interest = principle * (Math.pow((1 + (rate / n)), (n * time)));
    return principle + interest;
  }
  
  console.log(compoundInt(10000,5,2,2)) //1510625
  console.log(compoundInt(50000,25,1,2)) //9162500

// 10. Write a function to generate a random number

function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  
  console.log(genRandom(1,10)) // 8
  console.log(genRandom(80,90)) // 131