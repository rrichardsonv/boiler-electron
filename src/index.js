import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

const App = () => <div className="App">YO</div>;

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
