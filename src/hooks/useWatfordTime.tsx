import { useState, useEffect } from "react";

const useWatfordTime = () => {
  const [watfordTime, setWatfordTime] = useState(() => new Date());

  useEffect(() => {
    const updateWatfordTime = () => setWatfordTime(new Date());

    const now = new Date();
    const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    const timeout = setTimeout(() => {
      updateWatfordTime();
      const interval = setInterval(updateWatfordTime, 60000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    timeStyle: "short",
    hour12: true,
  }).format(watfordTime);
};

export default useWatfordTime;
