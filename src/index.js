import ReactDOM from "react-dom/client";
import React, { createContext } from 'react';
import App from "./App";
import { createStore } from "redux";
//Lets create the store object
// let store = createStore();
let rootReducer = (data="hii", action) => {
  let newData=data;
  if (action.type === "GOODMORNING") {
    return action.data;
  }else if(action.type === "hello"){
    return newData;
  }
};
let store = createStore(rootReducer);
store.subscribe(function () {
  console.log('New DATA IS ',store.getState());
});
store.dispatch({ type: "GOODMORNING", data: "nazeer" });
store.dispatch({ type: "hello", data: "hello" });
console.log(store);

export const data =  createContext()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<data.Provider value={store} >
<App />
</data.Provider>
</React.StrictMode>
  
);
