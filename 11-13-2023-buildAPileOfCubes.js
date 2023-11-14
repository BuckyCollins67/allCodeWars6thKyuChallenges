// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have a volume of (n-1)^3 and so on until the top which will have a volume of 1^3

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as N^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.


// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an interger.  It will me the "total volume of the building."

// R - Returns
// We will be expected to return an interger of the "n" of cubes needed to build a building of that volume.  If that isn't possible, we'll return -1.

// E - Examples
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// P - Psuedocode
// 1.) Take the given number, or the "total volume of the building"
// 2.) ...do math...?  There's probably a loop in here of some kind.
// 3.) if it's a nice round number, return that, otherwise return -1.
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function findNb(m) {
    let cumulativeVolume = 0
    let n = 0
    while (cumulativeVolume < m){
        n += 1
        cumulativeVolume += n**3
        if (cumulativeVolume == m) {
            return n
        }
    }
    return (-1);
}
