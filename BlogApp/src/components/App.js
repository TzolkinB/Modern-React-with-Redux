import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
