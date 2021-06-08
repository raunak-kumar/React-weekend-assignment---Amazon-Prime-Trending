import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {

  const [curr,setCurr] = useState(0)


  const {slides} = props
  // console.log(slides);

  return (
    <>
    <h1 data-testid="title">{slides[curr].title}</h1>
    <p data-testid="text">{slides[curr].text}</p>
    <button data-testid="button-prev" disabled={curr == 0} onClick={()=>setCurr(curr-1)}>Prev</button>
    <button data-testid="button-next" disabled={curr == slides.length-1} onClick={()=>setCurr(curr+1)}>Next</button>
    <button data-testid="button-restart" disabled={curr == 0} onClick={()=>setCurr(0)}>Restart</button>
    </>
  )
}


export default App;
