// Lib
import { useAuthState } from "react-firebase-hooks/auth";

// Services
import { auth } from "./services/firebase";

// Components
import { ChatRoom } from "./components/chat-room";
import { SignIn } from "./components/sign-in";

export const App = () => {
  const [user] = useAuthState(auth);

  return <div>{user ? <ChatRoom /> : <SignIn />}</div>;
};
