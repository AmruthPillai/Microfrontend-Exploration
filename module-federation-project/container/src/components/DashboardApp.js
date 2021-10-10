import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";
import { useHistory } from "react-router-dom";

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, { history });
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
