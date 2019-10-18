import React from 'react';
import FormCode from './component/Form';

class App extends React.Component {
  submit(value) {
    alert('Success!!!');
    console.log(value);
  }
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Form Validation</h3>
        <FormCode onSubmit={this.submit} />
      </div>
      
    )
  }
}

export default App;
