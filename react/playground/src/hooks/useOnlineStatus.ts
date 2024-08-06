import { useEffect, useState } from "react";

// export default function getOnlineStatus() {
//   // const [isOnline, setIsOnline] = useState(false);
// }

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
