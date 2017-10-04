import {connect} from 'react-redux';
import Stations from './stations';
import {fetchStations} from '../actions/stationsActions';


const mapStateToProps = ({stations}) => ({
  stations
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchStations: ()=>dispatch(fetchStations())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
