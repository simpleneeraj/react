// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Step 1.
// Step 2.

import React from 'react';
import ReactDOM from 'react-dom/client';

// Target Element

const htmlElement = document.getElementById('root');

// Wrap ReactDom

const container = ReactDOM.createRoot(htmlElement as HTMLElement);

// JSX

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <h1>
      HELLO REACT JS {counter}
      <button onClick={() => setCounter(counter + 1)}>Increwmtn</button>
    </h1>
  );
};

container.render(<App />);
