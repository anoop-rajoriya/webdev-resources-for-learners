# Strings (The Textual World)

**Goal:** Is assignment se aap seekhenge ki text data ko kaise handle karte hain, messages kaise construct karte hain aur templates kaise banate hain.

## 1. User Welcome Banner: Personalized Welcome Message

**Required Knowledge:** Aapko pata hona chahiye ki String Concatenation or Template Literals kya hote hai. Ager nahi pata hai to pata karke aao.

Ek website par user login karta hai. Aapko uska first name aur last name combine karke ek full name banana hai aur display karna hai: "Welcome [Full Name], humein khushi hai aap wapis aaye!". Iske liye niche diye gaye code ko copy karo or generate karo message and log karke dekho.

```js
const firstName = "" // your first name
const lastName = "" // your last/family name

const welcomeMessage = null // you code logic

console.log(welcomMessage)
```

> Real-life Use Case: Har app (Instagram, Facebook) login ke baad aapka naam upar dikhati hai.

> Hints: + operator use karein ya backticks (`) use karein.

## 2. Email ID Generator: Automatic Company Email

**Required Knowledge:** pata karo ki string me ager capital letters ho to unhe lowercase kase karte hai or multiple strings ko jodte kese hai beech me koi characters ko add karke like "hello$world".

Ek naya employee "Rahul" join karta hai jiska surname "Sharma" hai. Company ka domain "techexample.com" hai. Aapko in teeno ko mila kar ek email banana hai: rahul.sharma@techexample.com.

> Real-life Use Case: HR systems mein employee emails automatically generate hote hain.

> Hints: Sab variables ko lowercase mein rakhein aur beech mein dots (.) lagana na bhulein

## 3. Order Tracking ID: Order ID Prefixing

**Required Knowledge:** String Joins. Ager pichla question kar liya tha to ise bhi kar loge same concepts use karna hai jodne ke liye.

E-commerce site par order number 98765 hai. Lekin database ke liye humein ise ORD-98765-IND format mein chahiye. Is string ko generate karein.

```js
const prefix = "ORD"
const postfix = "IND"

// you code here and log ans

```

> Real-life Use Case: Unique identification for packages.

> Hints: ORD- aur -IND ko static strings ki tarah treat karein.

## 4. Simple Bio Creator: Social Media Bio

**Required Knowledge:** Multiline Strings. patha hona chahiye ki multilines strings kya hote hai or double/single quats ke saath or backticks ke saath kese banate hai.

Aapko ek user ka bio store karna hai jo multiple lines mein ho.

- Line 1: "Web Developer"
- Line 2: "Traveler & Foodie"
- Line 3: "Based in Delhi"

```js
const line1 = ""
const line2 = ""
const line3 = ""

const bio = null // you logic here

console.log(bio)
```

> Real-life Use Case: Instagram profile description.

> Hints: Template literals (backticks) ka use karein asan rahega.

## 5. Hidden Password Preview: Masked Password Display

**Required Knowledge:** length or repeat() method ke baare me pad kar kosis karo. patha karo kya hote hai ye or kese use karte hai.

User ne password set kiya "MySecret123". Security ke liye aapko code mein ek aur variable banana hai jisme sirf 12 star symbols ************ hon.

```js
const pass = "MySecret123"
const hiddenPass = null // you logic here
console.log(hiddenPass)
```

> Real-life Use Case: Jab aap password type karte hain to dots ya stars dikhte hain.

> Hints: Ye ek fixed string variable hoga.
