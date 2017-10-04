export const fetchStream= (id, success, error)=> {
  $.ajax({url: `https://frontend-tunein.herokuapp.com/api/v1/station/${id}`,
          type: "get",
          dataType: 'json',
          success,
          error
        });
};
