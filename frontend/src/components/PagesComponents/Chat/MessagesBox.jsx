import React from "react";


const MessagesBox = ({ channelMessages, filter }) => {

  return (
    <div id='messages-box' className='chat-messages overflow-auto px-5 '>
        {channelMessages?.map(({id, username, body}) => (
        <div className='text-break mb-2'key={id}>
          <b>{ username}</b>
          {': '}
          <span>{filter.clean(body.body)}</span>
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
