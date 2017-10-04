import React from 'react';

class Stations extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.fetchStations();
  }

  render(){
    console.log(this.props.stations);
    return (
      <div>
        <ul>

        </ul>
      </div>
    );
  }
}


export default Stations;
