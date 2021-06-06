// Lib
import firebase from "firebase/app";
import { useState } from "react";
import styled from "styled-components";

// Services
import { auth, firestore } from "../services/firebase";

export const ChatForm = () => {
  const messagesRef = firestore.collection("messages");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    const messageText = message;
    setMessage("");

    await messagesRef.add({
      text: messageText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type in your message..."
      />
      <button>
        <span>Send</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </Form>
  );
};

const Form = styled.form`
  position: fixed;
  bottom: 0;

  width: 100%;

  display: flex;
  gap: 1rem;

  padding: 0.5rem 1rem;

  background: rgba(255, 255, 255, 0.75);

  input {
    padding: 0.75rem 1rem;

    width: 100%;

    background: var(--light-grey);

    border: 1px solid var(--border);
    border-radius: var(--pill);

    transition: var(--transition);

    &:focus,
    &:active {
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.125);
    }
  }

  button {
    padding: 0.75rem 1rem;

    display: flex;
    gap: 0.5rem;

    color: var(--white);

    background: var(--blue);

    border: none;
    border-radius: var(--pill);

    transition: var(--transition);

    svg {
      width: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
