import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

export default function ConditionalRendering({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
  //   return <div>{isLoggedIn && <AdminPanel />}</div>;
}
