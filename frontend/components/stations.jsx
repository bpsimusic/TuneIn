import React from 'react';
import {Link} from 'react-router-dom';

class Stations extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.fetchStations();
  }

  render(){
    const {receivedStations} = this.props;
    return (
      <div style={{border: '1px solid black'}}>
        <ul>
          {receivedStations.map((element,i) =>
            <li key={i}><Link to={`/profile`}>{element}</Link>
            </li>)
            }
        </ul>
      </div>
    );
  }
}


export default Stations;
