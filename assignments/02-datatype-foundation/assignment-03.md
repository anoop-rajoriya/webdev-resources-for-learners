# Booleans, Null, and Undefined

**Goal:** Decision making aur empty values ko handle karna seekhein.

## 1. Login Toggle: Is User Logged In?

**Required Knowledge:** Boolean Assignment. how to assign boolean value to variables. nahi aata to jao fatak se dekh kar aajao.

Ek variable banaiye isLoggedIn. Agar user login hai to value true rakhein, warna false. Isse hum websites per decide karenge ki "Logout" button dikhana hai ya "Login" button.

```js
// for logged in user
// for not logged in user
```

> Real-life Use Case: UI/UX access control.

> Hints: Sirf true ya false values use karein.

## 2. Search Result "Nothing Found": Empty Search Box

**Required Knowledge:** Null Data Type.

User ne website par "Blue Shoes" search kiya, par wo stock mein nahi hain. Aap search results variable ko intentionally "empty" (khali) set karein.

> Real-life Use Case: Database se jab data nahi milta tab hum use null set karte hain.

> Hints: Variable ko null assign karein.

## 3. Profile Form Incomplete: The Missing Phone Number

**Required Knowledge:** Undefined.

User ne registration form bhara lekin "Phone Number" wala field blank chhod diya. JavaScript mein jab koi variable declare karte hain par value nahi dete, to wo kya hota hai? Ise code mein dikhayein.

> Real-life Use Case: Form validation and optional fields.

> Hints: Sirf let phoneNumber; likhein aur print karein.

## 4. Dark Mode Setting: System Theme Preference

**Required Knowledge:** Booleans.

Kya user ne "Dark Mode" on kiya hai? Variable isDarkModeActive ko true set karein.

> Real-life Use Case: Apps switches (On/Off features).

> Hints: Logic simple rakhein—On matlab true, Off matlab false.

## 5. Product Stock Check: Out of Stock Alert

**Required Knowledge:** Boolean.

Ek product hai iPhone 15. Variable isAvailable ko false set karein ye batane ke liye ki wo sold out ho gaya hai.

> Real-life Use Case: Amazon/Flipkart product availability status.

> Hints: Use Boolean to represent state.
