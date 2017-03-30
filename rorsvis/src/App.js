import React, { Component } from 'react';
import './App.css';

import ClientRouter from "./ClientRouter";

class App extends Component {
  render() {
    return (
		<div className="App">
			<ClientRouter />
		</div>
    );
  }
}

export default App;
