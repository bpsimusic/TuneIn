import {connect} from 'react-redux';
import Profile from './profile';
import {clearProfile, fetchProfile} from '../actions/profileActions';



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
    clearProfile: ()=>dispatch(clearProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
