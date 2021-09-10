import React from "react";
const App = () => {
  const renderCard = () => {
    return(
      <div>
        <h1>Hello</h1>
        <p>This is a paragraph</p>
      </div>
    );
  };
  const notRenderCard = () => {
    return(
      <div>
       
        <p>Clique para Mostra o card</p>
      </div>
    );
  };
  const hasRenderCard = false;
  const buttonA = <button>Click me</button>;
  const buttonB = <button>click me2</button>;



  return (
    <div>
      <h1>Hello World</h1>
      <h2>rodrigo </h2>
      {hasRenderCard ? renderCard() :notRenderCard()}
      <div>{buttonA} {buttonB}</div>
    </div>
  );
};
export default App;