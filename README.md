# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Core ReactJs interview Question

Q1. What is ReactJs.
A1. React (jo React.js ya ReactJS ke naam se bhi jana jata hai) ek open-source front-end JavaScript library hai jo user interfaces (UI) banane ke liye use hoti hai, khas kar single-page applications (SPA) ke liye.

Iska use web aur mobile apps ke view layer ko handle karne ke liye hota hai. React component-based aur declarative approach follow karta hai, jisme hum chhote-chhote reusable components banate hain jo milkar ek complete UI tayar karte hain.

Q2. Declarative approach ?
A2. Declarative approach ka matlab hota hai "Kya hona chahiye" par focus karna, na ki "Kaise hoga" par.

React me declarative programming ka matlab hai ki hum directly bata dete hain ki UI ka final output kaisa dikhega, aur React usko manage karta hai.

🔹 Example:
Agar hume React me ek button dikhana hai, toh hum sirf yeh likhenge ki button ka text kya hoga, React khud usko render karega aur update bhi karega.
code:
function App() {
  return <button>Click Me</button>;
}

