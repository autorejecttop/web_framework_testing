import { useState } from "react";
import AboutPage from "./components/AboutPage";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <hr />
      <AboutPage />
      <hr />
      <Profile />
      <hr />
      <ConditionalRendering isLoggedIn={false} />
      <hr />
      <ShoppingList />
    </div>
  );
}
