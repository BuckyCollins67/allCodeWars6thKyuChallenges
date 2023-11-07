// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
//  We'll be given 3 intergers.  The height of the floor we're on.  The 'bounceyness' of the ball, and the window of the observer.
 

// R - Returns
//  We'll be expected to return an interger back, that is, the number of times the observer will see the bouncing ball.


// E - Examples
//  height of 3, bounce of .66, and 1.5, should see the ball 3 times.  return 3


// P - Psuedocode
  // 1.  If the h is greater than 0 then
            // if the h is greater than window then
              // count the observation
              // calculate if the bounce will surpass the window again if yes then observation+2 repeat until no
              // when no, return the observations

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //


              function bouncingBall(h,  bounce,  window) {
                if (h > window && h > 0 && bounce > 0 && bounce < 1){
                  let observation = 1
                  console.log(`Ball is high enough to be seen on the way down. Current observations are at ${observation}.`)
                  console.log(`Will now determine if bounce is high enough to be seen again.`)
                  while (h * bounce > window){
                      console.log(`The bounce went above the window.`)
                      observation += 2
                      console.log(`The observations are now at ${observation}`)
                      h = h * bounce
                      console.log(`The height is now ${h}`)     
                  }return observation
                }else{
                  return -1
                }
                }