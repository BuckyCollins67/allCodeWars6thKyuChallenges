// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//  PREP

//  Parameters
    //  Will be given a valid array with strings of 'n' 's' 'e' 'w'.  Array can vary in length, but will never be empty.

//  Returns
    //  A boolean is expected as a return.  True if the walk takes 10 minutes (ten steps) AND if we end where we started.

//  Examples
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false'

//  Pseudocode

// Make trackers for our north and south.  Our East and West.  
// Iterate through the array passed in.  If you travel north or East, add 1 to your respective tracker.  If you travel south or west, subract 1 to your respective tracker
// after iterating through the array, if the trackers equal 0, you stopped where you started.  AND if the number of steps given equals 10, you've taken a 10 minute walk.  Anything other than those two conditions will be false.

function isValidWalk(walk) {
    // Make trackers for our north and south.  Our East and West.  
    let upDownTracker = 0
    let leftRightTracker = 0
   
    // Iterate through the array passed in.  If you travel north or East, add 1 to your respective tracker.  If you travel south or west, subract 1 to your respective tracker

    for (i = 0; i < walk.length; i++){
      if (walk[i] == 'n'){
        upDownTracker++
      } else if (walk[i] == 's'){
        upDownTracker--
      } else if (walk[i] == 'e'){
        leftRightTracker++
      } else {
        leftRightTracker--
      }
    }
    
    // after iterating through the array, if the trackers equal 0, you stopped where you started.  AND if the number of steps given equals 10, you've taken a 10 minute walk.  Anything other than those two conditions will be false.

    if (upDownTracker == 0 && leftRightTracker == 0 && walk.length == 10){
      return true
    } else {
      return false
    }
  }