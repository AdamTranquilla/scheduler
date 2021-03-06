import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setHistory((prev) => {
      return replace
        ? [...prev.slice(0, prev.length - 1), mode]
        : [...prev, mode];
    });
  }

  function back() {
    setHistory((prev) => [...prev.slice(0, history.length - 1)]);
  }

  return { mode: history.slice(-1)[0], transition, back };
}
