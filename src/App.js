import React from "react";

class App extends React.Component {

  constructor(){
    super();
  }


  render(){
    return (
      <main className="main">
        <div className="main__calculator">
          <input className="calculator__input" type="text" placeholder="0"></input>
          <div className="calculator__buttons">
            <button className="calculator__btn">2</button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
