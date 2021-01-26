import { useState } from "react";

export default function useVisualMode(initial) {
  //const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) { // if true go back before satte was saved
    setHistory((prev) => {
      return replace
        ? [...prev.slice(0, prev.length - 1), mode]
        : [...prev, mode];
    });
  }

  function back() {
    if (history.length < 2) return;
    // remove last item
    setHistory((prev) => [...prev.slice(0, history.length - 1)]);
  }

  return { mode: history.slice(-1)[0], transition, back };
}
