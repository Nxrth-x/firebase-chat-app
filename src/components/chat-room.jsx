// Lib
import styled from "styled-components";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Services
import { firestore } from "../services/firebase";

// Components
import { ChatMessage } from "./chat-message";
import { ChatForm } from "./chart-form";
import { Header } from "./header";
import { useEffect, useRef } from "react";

export const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const messageContainerRef = useRef(null);

  useEffect(() => {
    messageContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <Header />
      <MessagesContainer>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        <div ref={messageContainerRef} />
      </MessagesContainer>
      <ChatForm />
    </div>
  );
};

const MessagesContainer = styled.ul`
  padding: 0 1rem;

  overflow: auto;
  overflow-x: hidden;

  margin-bottom: 3.2rem;

  list-style: none;

  display: flex;
  flex-direction: column;
`;
