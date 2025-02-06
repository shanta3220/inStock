import { useEffect, useState, useRef } from "react";
import "./LoadingTextAfterDelay.scss";

function LoadingTextAfterDelay({ list }) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!list || list.length === 0) {
      timeoutRef.current = setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      setShow(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [list]);

  return show && (!list || list.length === 0) ? (
    <p className="loading-text">
      Loading... The server might be idle. Please wait a moment or refresh the
      page in 1 minute.
    </p>
  ) : null;
}

export default LoadingTextAfterDelay;
