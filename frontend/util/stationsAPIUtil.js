export const fetchStations= (id, success) => {
  $.ajax({url: `frontend-tunein.herokuapp.com/api/v1`,
          type: "get",
          dataType: 'json',
          success
        });
};
