import React from 'react';

const Stream = (props)=>{
  const {receivedStream} = props;
  console.log(receivedStream.streamUrl)
  return (
    <div>
      <audio src={receivedStream.streamUrl} controls autoPlay/>
    </div>
  );
};

export default Stream;
