// Hoisting (The "Guest Arrival" Concept)
// Hoisting ka matlab hai JS engine ka variables aur functions ko top par move kar dena. Isse aise samjho jaise kisi guest ke aane se pehle hi unka naam announce ho jaye.

// Question 1: var ke saath hoisting kaise kaam karti hai? Agar hum variable define karne se pehle use print karein, toh undefined kyun aata hai? Ek variable banao var ka use karke aur usko print karo uske pehle.

// Hints: var variables ko hoisting ki wajah se upar le jata hai, lekin unki value undefined hoti hai jab tak wo define na ho jaye.

// Answer 1:

// Question 2: let aur const ke case mein Temporal Dead Zone (TDZ) kya hota hai? Agar hum let use karein toh error kyun aata hai jabki var mein nahi aata? Create two variable use let and const employeeName and employeeAge, and try to access them before declaration. What error do you get?

// Hints: Temporal Dead Zone (TDZ) ka matlab hai ki let aur const variables ko unke declaration se pehle access nahi kiya ja sakta. Isliye, agar aap unko pehle access karne ki koshish karte hain, toh ReferenceError aata hai.

// Answer 2:

// Question 3: Function Declaration aur Function Expression mein hoisting ka kya fark hai? learn karo ki funciton declaration and expression kya hota hai and kese hum declara karte hein dono ko. Niche diye gaye code snippets ko dekho aur samjho ki kaunsa code crash hoga aur kyun:

// Case A: hello(); function hello() { console.log("Hi"); }

// Case B: greet(); var greet = function() { console.log("Hello"); }
// Dono mein se kaunsa code crash hoga aur kyun?

// hints: Function Declaration (Case A) hoisting ke wajah se upar le jata hai, isliye hello() function ko pehle define kiya jata hai aur code crash nahi hota. Lekin Function Expression (Case B) mein var greet ko hoisting ke wajah se upar le jata hai, lekin uski value undefined hoti hai jab tak wo define na ho jaye. Isliye, greet() function ko pehle access karne ki koshish karne par ReferenceError aata hai.

// Answer 3:

// Question 4: Ek scenario socho: Aapne ek "Food Order" kiya hai. Agar aap payment pehle kar dete ho (Function Call) aur order baad mein dete ho (Function Definition), toh kya JS ise accept karega? Code likh kar check karo.

// Hints: ek function call sayhello() karo aur uske baad function define karo. Dekho ki kya error aata hai ya nahi.

// Answer 4:

// Question 5: var a = 10; function ke bahar hai aur var a = 20; function ke andar. Hoisting ke baad function ke andar a ki value kya hogi agar hum use declaration se pehle access karein?

// Hints: var a = 10; function ke bahar define hai, aur var a = 20; function ke andar define hai. Hoisting ke baad, function ke andar a ki value undefined hogi jab tak wo define na ho jaye. Isliye, agar hum use declaration se pehle access karte hain, toh undefined aayega.

// Answer 5: