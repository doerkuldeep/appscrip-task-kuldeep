import React, { useEffect, useState } from "react";
import HeaderSection from "../../Pages/HeaderSection/HeaderSection";
import MobileHeader from "../../Pages/MobileHeader/MobileHeader";

const Header = () => {
  const width = window.innerWidth;
  const [screenVal, setScreenval] = useState(false);

  useEffect(() => {
    if (width < 430) {
      setScreenval(true);
    }
  }, [width]);
  return <>{screenVal ? <MobileHeader /> : <HeaderSection />}</>;
};

export default Header;
