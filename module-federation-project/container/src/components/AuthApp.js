import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = ({ onAuthChange }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      history,
      onAuthChange,
    });
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
