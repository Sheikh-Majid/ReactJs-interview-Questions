# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Core ReactJs interview Question

### Q1. What is ReactJs?

React (jo React.js ya ReactJS ke naam se bhi jana jata hai) ek open-source front-end JavaScript library hai jo user interfaces (UI) banane ke liye use hoti hai, khas kar single-page applications (SPA) ke liye.

Iska use web aur mobile apps ke view layer ko handle karne ke liye hota hai. React component-based aur declarative approach follow karta hai, jisme hum chhote-chhote reusable components banate hain jo milkar ek complete UI tayar karte hain.

### Q2. Declarative approach?

Declarative approach ka matlab hota hai "Kya hona chahiye" par focus karna, na ki "Kaise hoga" par.

React me declarative programming ka matlab hai ki hum directly bata dete hain ki UI ka final output kaisa dikhega, aur React usko manage karta hai.

🔹 Example:
Agar hume React me ek button dikhana hai, toh hum sirf yeh likhenge ki button ka text kya hoga, React khud usko render karega aur update bhi karega.

```javascript
function App() {
  return <button>Click Me</button>;
}
```

### Q3. JSX?

✅ Answer:
JSX ek JavaScript ka extension hai jo React me HTML-like syntax likhne ki suvidha deta hai.

#Yeh JavaScript aur HTML ka mixture hai.
#Yeh React ke andar UI components ko define karne me madad karta hai.
#JSX code Babel compiler ke through pure JavaScript me convert hota hai.

### 📌 React Element Kya Hota Hai?

✅ Answer:
➡ React element ek simple JavaScript object hota hai jo UI ko represent karta hai.
➡ Ye immutable hota hai, ek baar create hone ke baad change nahi hota.
➡ Ye lightweight hota hai aur fast rendering ke liye React me Virtual DOM ke saath kaam karta hai.

```javascript
const element = <h1>Hello, World!</h1>;
const element = React.createElement("h1", null, "Hello, World!");
```

📌 React Component Kya Hota Hai?
➡ React component reusable UI ka ek block hota hai jo ek function ya class ke form me likha jata hai.
➡ Component ke andar state aur props hoti hain, jo data ko dynamic banati hain.
➡ Components ko baar-baar use kar sakte hain, isse development fast hota hai.

```function Greeting() {
  return <h1>Hello, React!</h1>;
}

🔥 Conclusion (Ek Line Me Samjhe)
✔ React Element: Ek simple JavaScript object hai jo UI ka ek chhota part represent karta hai.
✔ React Component: Ek function ya class hoti hai jo UI ka reusable aur dynamic part hoti hai.
✔ Element sirf ek baar create hota hai aur change nahi hota, lekin Component dynamic hota hai.
✔ Components ke andar logic, state aur lifecycle methods hote hain, jabki elements sirf UI ka static representation hote hain.

1️⃣ Functional vs Class Components me kya difference hai?
✅ Functional components hooks ka use karke state aur lifecycle handle karte hain, jabki class components me this.state aur lifecycle methods ka use hota hai.

4️⃣ What are React Hooks?
✅ Hooks React ka 16.8+ version ka feature hai jo functional components me state aur lifecycle methods ko enable karta hai.
✅ Example: useState, useEffect, useContext, etc.

3️⃣ Props vs State - Difference?
✅ Props parent se data pass karte hain aur immutable hote hain.
✅ State component ke andar mutable data store karta hai.

6️⃣ What is a Higher-Order Component (HOC)?
✅ HOC ek function hai jo ek component ko input leta hai aur ek naye enhanced component ko return karta hai.

```

const withLogger = (WrappedComponent) => {
return (props) => {
console.log("Props:", props);
return <WrappedComponent {...props} />;
};
};

7️⃣ What is React Reconciliation?
✅ React ka algorithm jo DOM updates optimize karta hai aur sirf wahi parts re-render karta hai jo change hue hain.

🔷 What is Component Lifecycle?
Jab bhi React component create hota hai, update hota hai, ya destroy hota hai, us process ko Component Lifecycle kehte hain.

React components ke 3 major phases hote hain:
1️⃣ Mounting - Jab component render hota hai (start hota hai).
2️⃣ Updating - Jab component ka state ya props change hota hai.
3️⃣ Unmounting - Jab component remove hota hai (destroy hota hai).

Class components me lifecycle methods hote hain (componentDidMount, componentDidUpdate, componentWillUnmount).

❓ React me Function aur Class Component me kya difference hai?
✅ Answer:

Function Components Hooks ka use kar ke state aur lifecycle manage kar sakte hain, jabki Class Components me lifecycle methods likhne padte hain.
Function Components fast hote hain, kyunki ye this nahi use karte.
Class Components sirf tab use hote hain jab Hooks se koi functionality possible nahi ho, jaise Error Boundaries.
🔹 Function Components recommended hote hain, Class Components sirf backward compatibility ya Error Boundaries ke liye use karne chahiye.

Q1: What is a Pure Component in React?
Ans. A Pure Component wo component hota hai jo same state aur props pe same output deta hai aur unnecessary re-renders ko prevent karta hai.

Class Components me: PureComponent ka use hota hai.
Function Components me: React.memo() ka use hota hai.

import React, { useState } from "react";

const Message = React.memo(({ text }) => {
console.log("Message Component Rendered!");
return <h1>{text}</h1>;
});

const App = () => {
const [count, setCount] = useState(0);
return (

<div>
<Message text="Hello, React!" />
<button onClick={() => setCount(count + 1)}>Increment {count}</button>
</div>
);
};

export default App;

React.memo() Kya Karta Hai?
React.memo() ek higher-order component (HOC) hota hai jo function compononent memorze karta h ki agr functions me same props and state pass ho rahe to same same output de.
👉 Unnecessary re-renders ko prevent karta hai.
👉 Ye previous props aur new props ka shallow comparison karta hai.
👉 Agar props same hai, to component re-render nahi hota.
👉 jisse hum performance improve kr sakte h

# useState in reactjs

# It is used internal communication inside a components

# const[state , setState] = useState(initalValue);

# state is a variable and setState is a function for update the state.

# useState is a hook in functional component.

Q1: useState ka return type kya hota hai?
Ans. useState ka return type array hota hai, jo do cheeze return karta hai.

1. current state
2. state update karne function.

example:
const [count, setCount] = useState(0);
console.log(typeof useState(0)); // Output: object (Array hota hai)

Q3: useState asynchronous hota hai ya synchronous?
🔹 Answer:
React ka useState asynchronous hota hai, yani ki jab setState call hota hai to immediately update nahi hota, balki next render cycle me update hota hai.

🔹 Props (Properties) Kya Hai?
Props (short for properties) React me parent component se child component ko data pass karne ka ek tarika hai. Props immutable hote hain, yani ki child component props ko modify nahi kar sakta.

🔥 Final Summary 🔥
🔹 useState
✅ Functional component me state manage karta hai.
✅ setState ke bina state change nahi ho sakti.
✅ Asynchronous hota hai.

🔹 Props
✅ Data parent se child bhejne ke liye use hota hai.
✅ Immutable hote hain (change nahi ho sakte).
✅ Read-only hote hain.

🔥 Synthetic Events in React Kya Hain?
Synthetic Events React ke custom wrapper hote hain jo browser ke native events ko wrap karte hain. Yeh React ke event system ko optimize karte hain taaki sabhi browsers pe consistent behavior mile.

👉 Matlab:
Agar hum React me onClick, onChange, ya koi bhi event handler use karte hain, to yeh direct browser events nahi hote, balki React ke Synthetic Events hote hain, jo React ke event delegation aur performance optimization ka part hain.

example:
import React from "react";

const App = () => {
const handleClick = (event) => {
console.log("Button Clicked!");
console.log(event); // SyntheticBaseEvent object
console.log(event.nativeEvent); // Original browser event
};

return <button onClick={handleClick}>Click Me</button>;
};

export default App;

🔥 Inline Conditional Expressions in React Kya Hain?
👉 Inline Conditional Expressions ka matlab hai ki hum ek hi line me condition likh sakte hain bina extra if-else statement likhe. Yeh React JSX me conditionally elements ko render karne ke liye use hote hain.

🔥 3 Types of Inline Conditional Expressions in React
1️⃣ Using Logical AND (&&)
2️⃣ Using Ternary Operator (condition ? true : false)
3️⃣ Using Short-Circuit OR (||)

Q. What is "key" prop and what is the benefit of using it in arrays of elements?
A. key ek unique identifier hai , and important attributes. we should use specing map an array. through this react ko pata chalta h kis item ko add/remove/update karna h.

<!-- Virtual Dom -->

Q1: What is Virtual DOM and how does it work?
✅ Answer:
Virtual DOM ek JavaScript object representation hota hai jo Real DOM ka lightweight copy hai. Jab bhi React component me state ya props change hota hai, React pehle Virtual DOM update karta hai, phir sirf changed elements ko efficiently Real DOM me update karta hai using diffing algorithm.

Q2: Why is Virtual DOM faster than Real DOM?
✅ Answer:
1️⃣ Real DOM directly manipulate hota hai, jisme poora page re-render hota hai (slow).
2️⃣ Virtual DOM pehle changes detect karta hai, phir sirf required elements ko update karta hai, is wajah se performance improve hoti hai.

Q3: What is Reconciliation in React?
✅ Answer:
Reconciliation ek process hai jo React use karta hai to sync Virtual DOM with Real DOM. Ye diffing algorithm ka use karta hai jisme old Virtual DOM aur new Virtual DOM compare hote hain, aur sirf necessary updates apply kiye jate hain Real DOM me.

!
🔥 Shadow DOM Kya Hai?
Shadow DOM Web Components ka feature hai jo ek isolated mini-DOM create karta hai. Matlab jo kuch Shadow DOM me hoga, wo outer DOM se effect nahi hoga.

🤔 Real-Life Example
Socho tumhare paas ek custom button component hai jo ek unique style aur behavior rakhta hai. Tum nahi chahte ki is button ke CSS styles kisi aur element pe effect kare ya kisi aur ki CSS is button ko affect kare.

💡 Shadow DOM exactly yehi karta hai – ek isolated scope banata hai!

Basically , Shadow DOM ek isolated DOM tree hai jo outer DOM se independent hai. Isme CSS, JavaScript , main ye conflict se bachta hai, ek isolated room ke taraf hota h.

🔥 React Fiber Kya Hota Hai? – Full Depth Samajho! 🚀
📌 Introduction – React Fiber Kya Hai?
✅ React Fiber ek naya reconciliation algorithm hai jo React 16 se introduce kiya gaya tha.
✅ Iska main goal React applications ki performance aur responsiveness improve karna hai.
✅ Fiber ka focus UI updates ko zyada smooth aur efficiently handle karna hai.
✅ React ke purane algorithm (React Stack) ka replacement hai jo zyada efficient rendering aur background updates allow karta hai.

❓ Q1: React Fiber kya hai?
✅ Answer:
React Fiber React ka naya rendering engine hai jo UI updates ko efficiently handle karta hai.
Iska goal performance optimization aur concurrent rendering ko support karna hai.

❓ Q2: React Fiber aur purane React Stack me kya difference hai?
✅ Answer:

React Fiber asynchronous rendering allow karta hai, jabki purana React synchronous rendering karta tha.
Fiber update priorities ko manage karta hai, purane React me sab updates same priority ke hote the.
Fiber me UI animations aur lag-free interactions better hain.

❓ Q1: React me Controlled aur Uncontrolled Components me kya difference hai?
✅ Answer:

Controlled Components React ke state se manage hote hain, jabki Uncontrolled Components ka data direct DOM me hota hai.
Controlled Components ka data change hone par React UI update hoti hai, Uncontrolled Components me data manually retrieve hota hai (useRef).

❓ Q2: React me Controlled Components kab use karna chahiye?
✅ Answer:

Jab hume form validation karni ho ya real-time updates chahiye ho.
Jab form ke input values React state ke basis par dynamically update karni ho.
❓ Q3: Uncontrolled Components kab use karna chahiye?
✅ Answer:

Jab performance important ho aur large number of form inputs ho.
Jab hume DOM ka direct access chahiye ho, jaise file uploads ya third-party form handling.


❓ Q1: useRef aur useState me kya difference hai?
✅ Answer:

useRef ka value change hone par component re-render nahi hota, jabki useState ka value change hone par re-render hota hai.
useRef DOM elements ko directly access karne ke liye use hota hai, jabki useState UI update ke liye hota hai.

<!-- Virtual Dom -->
<!-- 🗝️ Bonus Tip – key ka role:
key prop bahut important hota hai React ko batane ke liye ki kaunsa item same hai ya new.

Agar key sahi doge (jaise item.id), to reconciliation correctly hoga.

Galat key (jaise index) doge to React confuse ho sakta hai. -->

Q: Why do we use className instead of class in React?
A: In React, JSX is converted to JavaScript, and class is a reserved keyword in JavaScript. To avoid conflicts and ensure proper element styling, React uses className instead.

React internally uses JavaScript to build the UI.
JSX is not HTML — it's a JavaScript syntax extension that looks like HTML.
In JSX, attributes like class, for, etc., can cause conflicts:
class → className
for → htmlFor

What are Fragments in React?
Fragments in React allow you to group multiple elements without adding extra nodes to the DOM.

Normally, React components must return a single parent element, lekin agar tum multiple sibling elements return karna chaaho, toh bina kisi unnecessary <div> ke, Fragments ka use karte ho.
Note:
Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.

Q: What are React Portals and why do we use them?
A: React Portals allow us to render components outside the main React root node. They are useful for UI elements like modals, dropdowns, or tooltips where we want to avoid parent CSS conflicts (like overflow or z-index). They maintain React's event bubbling and reactivity even though rendered elsewhere in the DOM.

Q: Advantage of react?
Ans: 1. In everything is a base of components based architecture, Which is use multiple place in the project
2. React use Virtual Dom, Which is optimizing the performance of application.
3. One way data binding (parent to child) which is predicable and easy to debug.
4. strong community
5. JSX make the easy read and write.

Q: DisAdvantage of react?
Ans: 
1. No routing Availabe in raect . need to install third party library.
2. SEO Problem due client side rendering (need nextjs to improve SEO)
3. can we confused for newlearner.

Q: Style in Reactjs
Ans:
1. inline style css >>> which is written in form of javascript object
2. import form css written in another file
3. or we can use different type of framworks

Day: Tuesday>>>
Q: How are events handled differently in React compared to HTML?
Answer:
“React uses SyntheticEvent instead of native DOM events. Event names are written in camelCase, and we pass functions directly, not strings. SyntheticEvent helps React manage events consistently across browsers and improves performance.”
1. onClick()  >> button click
2. onChange()  >> handle input
3. onSubmit()  >> Form handle

Day: Wednesday>>>
Q: What is the impact of indexes as keys?
Ans: "Using index as a key is risky because it can cause bugs when the list changes dynamically. React uses keys to track components, and if index changes due to item addition or deletion, it may update the wrong component."


Q: Condentional Rendering of component in reactjs
Ans: Various ways to condentional rendering of react component ko
1. if/else
2. ternery operatore  condition ? (true):(false);
3. logical operator   (jb sirf true value show karna ho)  , {condition && (<p>Ye render kr do Please</p>)}
4. Switch case (like role base)

Q: Kb koun sa use kare?
Ans: “Main React me conditional rendering ka selection readability, condition complexity aur maintainability ke base pe karta hoon — jahan simple condition ho wahan ternary ya &&, aur complex logic ke liye if/else ya switch.”

<!-- Thursday -->
Q: Why we need to be careful when spreading props on DOM elements?
Ans: “to avoid unnecessary attributes, warnings, and maintain clean DOM, we carefully spread only valid props.”

Q:How do you memoize a component?
Ans: Memoize is a higher order components , which is wrape the components and Props and if there is same props It will avoid to re-render.
1. It helps in performance optimizing 
2. When compenent render continoulys with same props , then it helpfull for that
3. when components is expensive render and complex calculation.


🌟 What is React production mode?
By default, jab hum React app npm start se chalate hain, wo development mode me chalta hai:
✅ Extra warnings
✅ Error messages
✅ Slow performance (kyunki debugging tools active hote hain)

But production mode me: ✅ Warnings & dev-only checks remove ho jate hain
✅ Code minify & optimize hota hai
✅ Performance better hoti hai
✅ Bundle size chhoti ho jati hai

when we run npm run build react auto matically detect production environment and disible and development environmnet . this ensure the better performance and reduce the size of bundle, then  we server static file to the srever. build folder has static and minimize code html, css and js code.

Q: Why React requires capitalized component names:
Ans: <div> and <input/> react isse build in dom elemnt samata
>> Start with Capital letter react isse samajt Custom components. like <MyCompoent/>

React looks at the first letter of the element:

If the first letter is lowercase, React assumes it’s a built-in DOM element like <div>, <span>, etc.
If the first letter is uppercase, React assumes it’s a custom component and tries to render it accordingly.
