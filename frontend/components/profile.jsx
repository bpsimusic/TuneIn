import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchProfile(id);
  }

  render(){
    return (
      <div>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default Profile;
