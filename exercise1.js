//1. Write a JavaScript function that reverses a number.
function reversenumber(n) {
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reversenumber(32243)));

// Output:34223



//2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// program to check if the string is palindrome or not

function palindrome(pal) {
	let dd = ak.toString().split("").reverse("").join("");
	if (dd === ak.toString()) {
		return "palindrome"
	} else {
		return "not palindrome"
	}
}
let ak = "Akash"
console.log(palindrome(ak))

// Output:not palindrome

//4. Write a JavaScript function that returns a string that has letters in alphabetical order.

function alphabet_order(str) {
	return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

// Output:abeemrstw

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(str) {
	var array1 = str.split(' ');
	var newarray1 = [];

	for (var x = 0; x < array1.length; x++) {
		newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
	}
	return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// Output:The Quick Brown Fox


//6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function find_longest_word(str) {
	var array1 = str.match(/\w[a-z]{0,}/gi);
	var result = array1[0];

	for (var x = 1; x < array1.length; x++) {
		if (result.length < array1[x].length) {
			result = array1[x];
		}
	}
	return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// output: Development

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

function vowel_count(str1) {
	var vowel_list = 'aeiouAEIOU';
	var vcount = 0;

	for (var x = 0; x < str1.length; x++) {
		if (vowel_list.indexOf(str1[x]) !== -1) {
			vcount += 1;
		}

	}
	return vcount;
}
console.log(vowel_count("The quick brown fox"));

//  Output : 5


// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function test_prime(n) {

	if (n === 1) {
		return false;
	}
	else if (n === 2) {
		return true;
	} else {
		for (var x = 2; x < n; x++) {
			if (n % x === 0) {
				return false;
			}
		}
		return true;
	}
}

console.log(test_prime(37));



//9. Write a JavaScript function that accepts an argument and returns the type.
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('Akash'));
console.log(detect_data_type(false));

// Sample Output:
// number
// string
//boolean


// 10. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// sample:2,4