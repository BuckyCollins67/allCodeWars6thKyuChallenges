// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

//     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
    
//     [1, 1 ,1, 3, 5, 9, 17, 31, ...]
//     But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
    
//     [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
//     Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
    
//     Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a "signature" which is an array of 3 numbers.  And we will be given an "n" a number telling us how many results to return.

// R - Returns
// We will be expected to return an array of numbers

// E - Examples
//    [ [1,1,1], 10] => [1,1,1,3,5,9,17,31,57,105]
//    [1,1,1],  1]   => [1]

// P - Psuedocode
// 1.) declare an array, with blanks inside, for a length of n.  If n = 0, return empty array
// 2.) if the array length is larger than 3 fill push the first three numbers from the signature
// 3.) then loop x number of times where x is n - 3
// 4.) add up the previous three array values and push the value into the array.  Return that array.

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function tribonacci(signature, n) {
    // If n is 0, return an empty array
    if (n === 0){
      return [];  
    } else {
        // Initialize the result array with the signature
        let result = signature.slice(0, n);
        if (result.length == 1 || result.length == 2 || result.length == 3) {
            return result
        }else{
            // Loop to generate the sequence
          for (let i = 3; i < n; i++) {
          // Calculate the next number and push it to the result array
             result[i] = result[i - 1] + result[i - 2] + result[i - 3];
            }
            // Return the first n elements of the sequence
            return result;
        }
        

        }

    
  }