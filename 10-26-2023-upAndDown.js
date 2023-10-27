// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Don't be afraid, the description is rather long but - hopefully - it is in order that the process be well understood.

// You are given a string s made up of substring s(1), s(2), ..., s(n) separated by whitespaces. Example: "after be arrived two My so"

// Task
// Return a string t having the following property:

// length t(O) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)

// where the t(i) are the substring of s; you must respect the following rule:

// at each step from left to right, you can only move either already consecutive strings or strings that became consecutive after a previous move. The number of moves should be minimum.

// Let us go with our example:
// The length of "after" is greater than the length of "be". Let us move them ->"be after arrived two My so"

// The length of "after" is smaller than the length of "arrived". Let us move them -> "be arrived after two My so"

// The length of "after" is greater than the length of "two" ->"be arrived two after My so"

// The length of "after" is greater than the length of "My". Good! Finally the length of "My" and "so" are the same, nothing to do. At the end of the process, the substrings s(i) verify:

// length s(0) <= length s(1) >= length s(2) <= length s(3) >= length (s4) <= length (s5)

// Hence given a string s of substrings s(i) the function arrange with the previous process should return a unique string t having the property (P).

// It is kind of roller coaster or up and down. When you have property (P), to make the result more "up and down" visible t(0), t(2), ... will be lower cases and the others upper cases.

// arrange("after be arrived two My so") should return "be ARRIVED two AFTER my SO"
// Notes:
// The string "My after be arrived so two" has the property (P) but can't be obtained by the described process so it won't be accepted as a result. The property (P) doesn't give unicity by itself.
// Process: go from left to right, move only consecutive strings when needed.
// For the first fixed tests the needed number of moves to get property (P) is given as a comment so that you can know if your process follows the rule.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a string made up of sub strings separated by white space.  (the examples given give a jumbled sentance made up of words separated by white space.)

// R - Returns
// We will be expected to return a new string with the sub strings re-arranged by a set of rules.
//  length t(O) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)  t[i] are the substings
// 0 3 2 3 2 3  Kind of like that.  Basically small and big values have to be in this pattern.




// E - Examples
//  "after be arrived two My so"  =>  "be ARRIVED two AFTER my SO"
//   "who hit retaining The That a we taken" =>  "who RETAINING hit THAT a THE we TAKEN"

// P - Psuedocode
// 1.) split the string into an array of items.  We're seperating on the white space.
// 2.) Iterate through the array.  If the length of the array[0] is less than or equal to the next item, GOOD MOVE ON, otherwise, move that item to a different spot in the array.
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function arrange(strng) {
    let arr = strng.split(" ")  //convert string to array
    for (i = 0; i < arr.length; i+2){  //for every other item in the array
      if (arr[i].length >= arr[i+1].length){  //if the length of the item is greater than the next item's length in the array
        let holder = arr.splice(arr[i],1)  //delete that item and store it in the holder
        arr.splice(arr[i+2],0,holder)  //then put that deleted item in the spot 2 items further along.
      }
        
    }
    return arr.toString()
    console.log(arr)
}