
1.What is JSX, and why is it used?<br/>
Ans:JSX (JavaScript XML) is using react syntax so that it allows codr to write HTML code inside JavaScript.
It is used to make UI code easier to read, write, and understand when building components.

2.What is the difference between State and Props?
Ans:State can change during runtime , on the other side Props can't change it's only read.

3.What is the useState hook, and how does it work?
Ans:`useState` is add and manage state in functional components used in React Hook.

4.How can you share state between components in React?
Ans:State can be shared by lifting the state up to a common parent component and passing it to child components using props. 

5.How is event handling done in React?
Ans:By using event handler functions written in camelCase done in React
Ex: <button onClick={handleClick}>Click</button> it's when the button is clicked.



# React + Vite

Test commit

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
