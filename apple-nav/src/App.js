import React from 'react';
import {Route} from "react-router-dom";
import NavWrapper from './components/NavWrapper';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super();
      this.state = {}
    
  }

  render() {
  return (
    <div className="App">
      <Route path="/" component={App}/>
      <Route exact path="/" component={NavWrapper} />
    </div>
  );
}
}
export default App;
