import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Usestate } from './usestate';
import { Userdata } from './redux/userdata';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { Useeffect } from './useEffect';
// import { Context_fun } from './context_Api';
// import { Parent_router } from './router';
// import App from './App'; 
// import { Usestate } from './usestate';
// import { Parent } from './demo';
// import { Usestate } from './usestate';
// import { Parent_reduce } from './usereducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Parent/> */}
    {/* <Usestate/> */}
    {/* <Parent_reduce/> */}
    {/* <Parent_router/> */}
    {/* <Context_fun/> */}
  {/* <Useeffect/> */}
  <Provider store={store}>
    <Userdata/>
  </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
