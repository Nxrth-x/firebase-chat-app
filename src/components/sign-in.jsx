import firebase from "firebase/app";
import styled from "styled-components";
import { auth } from "../services/firebase";

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  background: var(--blue);

  button {
    padding: 0.75rem 1rem;

    border: none;
    border-radius: 0.5rem;

    font-weight: 700;
    color: var(--blue);
  }
`;
