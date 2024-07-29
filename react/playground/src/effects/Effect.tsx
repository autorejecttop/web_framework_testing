import { useEffect } from "react";

export default function Effect() {
  useEffect(() => {
    return () => {
      console.log("Effect cleanup");
    };
  }, []);

  return (
    <div>
      <dialog open>lol</dialog>
    </div>
  );
}
