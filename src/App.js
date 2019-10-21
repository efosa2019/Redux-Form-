import React from 'react';
import FormCode from './component/Form';
import './App.css';

class App extends React.Component {
  submit(value) {
    alert('Success!!!');
    console.log(value);
  }
  render() {
    return (
      <div className="container">
        <h1>Form Validation </h1> 
        <FormCode onSubmit={this.submit} />
      </div>
      
    )
  }
}

export default App;
