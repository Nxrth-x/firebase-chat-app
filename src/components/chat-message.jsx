import styled from "styled-components";
import { auth } from "../services/firebase";

export const ChatMessage = ({ message }) => {
  return (
    <MessageContainer
      className={message.uid === auth.currentUser.uid ? "sender" : "reciever"}
    >
      <div>
        <p>{message.text}</p>
      </div>
      <img src={message.photoURL} alt={message} />
    </MessageContainer>
  );
};

const MessageContainer = styled.li`
  margin: 1rem 0;

  display: flex;
  gap: 1rem;

  div {
    padding: 0.5rem 1rem;

    display: grid;
    place-items: center;
  }

  img {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
  }

  &.sender {
    place-self: flex-end;

    animation: animate-sender 500ms;

    div {
      background: var(--blue);
      color: var(--white);

      border-radius: 0.5rem 0.125rem 0.5rem 0.5rem;
    }
  }

  &.reciever {
    flex-direction: row-reverse;
    place-self: flex-start;

    animation: animate-reciever 500ms;

    div {
      background: var(--medium-grey);
      color: var(--text);

      border-radius: 0.125rem 0.5rem 0.5rem 0.5rem;
    }
  }

  @keyframes animate-reciever {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes animate-sender {
    from {
      opacity: 0;
      transform: translate(50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
