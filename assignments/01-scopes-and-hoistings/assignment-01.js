//  Global vs. Local Scope (The "Ghar vs. Park" Concept)
// Socho ki ek "Public Park" hai jahan koi bhi ja sakta hai (Global Scope), aur ek "Aapka Ghar" hai jahan sirf family members allowed hain (Local/Function Scope).

// Question 1: Agar aapne ek variable let item = "Football" Park (Global) mein rakha hai, toh kya aap use apne Ghar (Function) ke andar se access kar sakte ho? Code likh kar samjhao.

// Hints: Pehale khudse kosis karo, item = "Football" ko sabse bahar define karo, phir ek function "Ghar" banao jisme tum item ko access karne ki koshish karo.

// Answer 1:

// Question 2: Aapne function Ghar ke andar ek var secret = "Chocolates" chhupa rakhi hai. Kya aapka koi dost jo park (global yani bahar) mein khada hai, wo is secret ko dekh sakta hai kya?

// Hints: secret variable ko function ke andar define karo, aur phir park mein (yani bahar) se usko access karne ki koshish karo.

// Answer 2:

// Question 3: Variable Shadowing kya hota hai? Agar Park mein bhi ek let water = "Tap Water" hai aur Ghar ke andar bhi let water = "RO Water" hai, toh ghar ke andar kaunsa wala water use hoga? code likh kar samjhao.

// Hints: Pehle park (global yani bahar) mein let water = "Tap Water" define karo, phir function Ghar ke andar let water = "RO Water" define karo, aur phir Ghar ke andar water ko print karo.

// Answer 3:

// Question 4: Ek function banao jisme local variable ka naam aur global variable ka naam same ho. Console mein dono ko print karne ki koshish karo aur dekho kya hota hai.

// Hints: Pehle park (global yani bahar) mein let name = "Global Name" define karo, phir function Ghar ke andar let name = "Local Name" define karo, aur phir Ghar ke andar dono name ko print karo.

// Answer 4:

// Question 5: Real-life mein "ATM Pin" aur "City Name" mein se kaunsa Global Scope hona chahiye aur kaunsa Local? or Kyun? Socho ki ATM Pin ek aisi information hai jo sirf aapke liye important hai, aur City Name ek aisi information hai jo sabke liye important hai. Is hisaab se decide karo ki kaunsa variable global hona chahiye aur kaunsa local.

// Hints: ATM Pin ko local variable banao kyunki wo sirf aapke liye important hai, aur City Name ko global variable banao kyunki wo sabke liye important hai.

// Answer 5: