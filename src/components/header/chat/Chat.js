import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "../../../firebase/firebase";
import Message from "../massege/Message";
import ChatInput from "../../chatInput/ChatInput";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(
            snapshot.docs.map((doc) => doc.data())
          )
        );
    }
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon></StarBorderIcon>
          </h4>
        </div>
        <div className='chat__headerRight'>
          <p>
            <InfoIcon></InfoIcon>Details
          </p>
        </div>
      </div>

      <div className='chat__messages'>
        {roomMessages.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userImage}
          ></Message>
        ))}
      </div>

      <ChatInput
        channelName={roomDetails?.name}
        channelId={roomId}
      ></ChatInput>
    </div>
  );
}

export default Chat;
