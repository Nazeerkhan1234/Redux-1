import React from "react";
import { data } from '.';
import { useContext } from 'react';
export default function App() {
  const state = useContext(data);
  console.log(state)
  state.subscribe(()=>{
    console.log(state.getState());
  });
  state.dispatch({ type:"GOODMORNING",data:'khan bhai'});
  return (
    <>
    <h1>hello</h1>
    </>
  )
}
