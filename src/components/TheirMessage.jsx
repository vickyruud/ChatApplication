const TheirMessage = ({ lastMessage, message }) => {
  
  // check if this message is the first by the user
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

 
  
  return (
    <div className="message-row">
      {/* render the first message conditionally */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{backgroundImage: `url(${message?.sender?.avatar})`}}
        />
      )}
      {
          //check if message is an image and render it
        message?.attachments?.length > 0
          ? (
              <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className="message-image"
                style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
      
              />
          ) : (
                <div className="message" style={{ float: 'left',backgroundColor:'#CABCDC' , marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                  {message.text.replace(/(<([^>]+)>)/gi, "")}
                </div>

           )  
      }
    </div>
  );
}

export default TheirMessage;