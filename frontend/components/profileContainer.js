import {connect} from 'react-redux';
import Profile from './profile';
import {clearProfile, fetchProfile} from '../actions/profileActions';
import {fetchStream} from '../actions/streamActions';



const mapStateToProps = ({profile}) => {

  return {
    receivedProfile: profile.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (id)=>{
      dispatch(fetchProfile(id));
    },
    clearProfile: ()=>dispatch(clearProfile()),
    fetchStream: (id)=>dispatch(fetchStream(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
