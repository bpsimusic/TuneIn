import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    const id = this.props.location.pathname.split("/profile/")[1];
    this.props.fetchProfile(id);
    this.props.fetchStream(id);
  }

  displayTags(tags){
    if (!tags){
      return ;
    } else {
      return (<ul>
        {tags.map((tag, i)=><li key={i}>{tag}</li>)}
      </ul>);
    }
  }

  render(){
    const {tags, name, imgUrl} = this.props.receivedProfile;
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <br/>
        <h1>{name}</h1>
        <br/>
        <img src={imgUrl}/>
        <br/>
        {this.displayTags(tags)}
      </div>
    );
  }

  componentWillUnmount(){
    this.props.clearProfile();
  }
}

export default Profile;
