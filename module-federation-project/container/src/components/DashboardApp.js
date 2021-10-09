import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, { history });
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
