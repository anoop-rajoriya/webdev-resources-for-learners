// Block Scope & Lexical Scope (The "Office Cabin" Concept)
// Socho ek bada office hai (Global). Uske andar ek Manager ka cabin hai (Outer Function) aur us cabin ke andar ek safe box hai (Inner Block {}).

// Question 1: var block scope ko follow nahi karta, par let aur const karte hain. Is code ka output kya hoga?

// if (true) {
//     var tool1 = "Hammer";
//     let tool2 = "Screwdriver";
// }
// console.log(tool1);
// console.log(tool2);

// Explanation: var tool1 = "Hammer"; block scope ko follow nahi karta, toh wo global scope mein define ho jata hai. Lekin let tool2 = "Screwdriver"; block scope ko follow karta hai, toh wo inner block ke andar define ho jata hai. Isliye, console.log(tool1) ka output "Hammer" hoga, lekin console.log(tool2) ka output ReferenceError hoga.

// Question 2: Lexical Scope kya hai? Agar ek "Bacha" function apne "Papa" function ke variables ko access kar raha hai, toh kya "Papa" function apne "Bache" ke private toys (variables) access kar sakta hai?

// Tasks: create karo function "Papa" uske paas ek variable "secretToy" hai and ek inner function "Bacha" define karo "Papa" function ke ander jo access karta hai "secretToy". Uske baad "Bacha" function ke ander ek variable "privateToy" define karo. Finally, try to access "privateToy" from "Papa" function.

// Answer:

// Explanation: Lexical Scope ka matlab hai ki ek function apne parent function ke variables ko access kar sakta hai, lekin parent function apne child function ke variables ko access nahi kar sakta. Isliye, agar ek "Bacha" function apne "Papa" function ke variables ko access kar raha hai, toh "Papa" function apne "Bache" ke private toys (variables) access nahi kar sakta.

// Question 3: Loop ke andar scope ka kya role hota hai? Agar hum for(var i=0; ...) use karein vs for(let i=0; ...), toh loop khatam hone ke baad i ki value kahan milegi? Try karo dono cases mein i ki value ko console.log karo loop ke end hone ke baad.

// Answer:

// Question 4: Ek Nested Function (function ke andar function) banao. Sabse bahar ek variable rakho const country = "India". Sabse andar wale function se ise access karne ki koshish karo. Is concept ko kya kehte hain?

// Answer:

// Question 5: Ek real-life example do jahan aapko Strict Block Scope (const ya let) use karna hi chahiye taaki data leak na ho. Kosis karo ki sochne ki.

// Answer: