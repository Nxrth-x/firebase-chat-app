import styled from "styled-components";
import { auth } from "../services/firebase";

export const Header = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <h3>Nxrth-x chat</h3>
      <button onClick={signOut}>
        <span>Sign out</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--white);
  background: var(--blue);

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.125);

  button {
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: none;
    border-radius: 0.5rem;

    color: var(--blue);

    background: var(--white);

    svg {
      width: 1rem;
    }
  }
`;
