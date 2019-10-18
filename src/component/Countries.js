import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    var myList = new Request('https://restcountries.eu/rest/v2/all');
    fetch(myList)
      .then(res => res.json())
      .then(countries =>
        this.setState({ countries }) 
      );
  }
  
  render () {
    const { countries } = this.state;
    let countriesList = countries.length > 0
    	&& countries.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select>
          {countriesList}
        </select>
      </div>
    );
  }
}

export default Countries;
