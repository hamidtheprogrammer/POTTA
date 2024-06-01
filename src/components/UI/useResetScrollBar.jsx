import React from "react";
import { useEffect } from "react";

const useResetScrollBar = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
};

export default useResetScrollBar;
