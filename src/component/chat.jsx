// ChatComponent.js
import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { SENDER, RECEIVER } from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/ChatReducers";
import "../component/chat.css";

const StyledContainer = styled(Container)({
  marginTop: 20,
});

const StyledPaper = styled(Paper)({
  padding: 20,
  height: "90vh",
  overflowY: "auto",
});

const ChatComponent = () => {
  const [msg, setMsg] = useState("");

  //dispatch data to the redux store

  const dispatch = useDispatch();
  const msgData = useSelector((state) => state.chat);

  const handleSendMSg = () => {
    dispatch(addChat(msg));
    setMsg("");
  };
  return (
    <StyledContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <div className="media media-chat">
              <img
                className="avatar"
                src="https://img.icons8.com/color/36/000000/administrator-male.png"
                alt="..."
              />
              <div className="media-body">
                {RECEIVER.map((msg, ind) => {
                  return <p>{msg}</p>;
                })}
                <p className="meta">
                  <time dateTime="2018">23:58</time>
                </p>
              </div>
            </div>

            <div className="media media-meta-day">Today</div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                {SENDER.map((msg, ind) => {
                  return <p>{msg}</p>;
                })}
                {msgData.length > 0 &&
                  msgData.map((msg, ind) => {
                    return <p>{msg}</p>;
                  })}
                <p className="meta">
                  <time dateTime="2018">00:06</time>
                </p>
              </div>
            </div>

            <div className="publisher bt-1 border-light">
              <img
                className="avatar avatar-xs"
                src="https://img.icons8.com/color/36/000000/administrator-male.png"
                alt="..."
              />
              <TextField
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="publisher-input"
                variant="outlined"
                fullWidth
                placeholder="Write something"
              />
              <span className="publisher-btn file-group">
                <i className="fa fa-paperclip file-browser"></i>
                <input type="file" />
              </span>
              <a className="publisher-btn" href="#" data-abc="true">
                <i className="fa fa-smile"></i>
              </a>
              <Button
                onClick={() => handleSendMSg()}
                className="publisher-btn text-info"
                variant="contained"
                color="primary"
                href="#"
                data-abc="true"
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/000000/sent--v1.png"
                  alt="sent--v1"
                />
              </Button>
            </div>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default ChatComponent;
