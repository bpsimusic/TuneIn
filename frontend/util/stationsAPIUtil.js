export const fetchStations= (success, error)=> {
  $.ajax({url: `https://frontend-tunein.herokuapp.com/api/v1/stations`,
          type: "get",
          dataType: 'json',
          success,
          error
        });
};
