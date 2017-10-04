export const FETCH_STREAM = "FETCH_STREAM";
export const RECEIVE_STREAM = "RECEIVE_STREAM";
export const CLEAR_STREAM = "CLEAR_STREAM";


export const fetchStream = (id) => {
  return {
    type: FETCH_STREAM,
    id
  };
};

export const receiveStream = (stream) => ({
  type: RECEIVE_STREAM,
  stream
});

export const clearStream = () => {
  return {
    type: CLEAR_STREAM,
  };
};
