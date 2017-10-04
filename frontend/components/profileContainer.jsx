import {connect} from 'react-redux';
import Profile from './profile';
import {fetchProfile} from '../actions/profileActions';


const mapStateToProps = ({profile}) => {

};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProfile: (id)=>{
      dispatch(fetchProfile(id));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
