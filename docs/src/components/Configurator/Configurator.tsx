import { useEffect, useState } from "react";

export default function Configurator() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      console.log("foo");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(iv);
    };
  }, []);

  return <div>{count}</div>;
}
