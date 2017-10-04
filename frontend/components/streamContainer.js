import {connect} from 'react-redux';
import Stream from './stream';
import {clearStream, fetchStream} from '../actions/stationsActions';


const mapStateToProps = ({stream}) => {
  return {receivedStream: stream.stream};
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchStream: (id)=>{
      dispatch(fetchStream(id));
    },
    clearStream: ()=>dispatch(clearStream())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
