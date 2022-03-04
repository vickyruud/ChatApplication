const MyMessage = ({ message }) => {

  //strip html tags from message text string
  const messageText = message.text.replace(/(<([^>]+)>)/gi, "");;
   //check if message is an image and render it
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt='message-attachment'
        className="message-image"
        style={{float: 'right'}}
      
      />
    )
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50' }}>
      {messageText}
    </div>
  );
}

export default MyMessage;