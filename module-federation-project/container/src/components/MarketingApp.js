import React, { useRef, useEffect } from "react";

import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const appRef = useRef(null);

  useEffect(() => {
    mount(appRef.current);
  }, []);

  return <div ref={appRef} />;
};

export default MarketingApp;
