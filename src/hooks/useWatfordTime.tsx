import { useState, useEffect } from "react";

const useWatfordTime = () => {
  const [watfordTime, setWatfordTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setWatfordTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    timeStyle: "short",
    hour12: true,
  }).format(watfordTime);
};

export default useWatfordTime;
