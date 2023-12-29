import React, { useEffect, useState } from "react";
import FooterSection from "../../Pages/FooterSection/FooterSection";
import MobileFooter from "../../Pages/MobileFooter/MobileFooter";

const Footer = () => {
  const width = window.innerWidth;
  const [screenVal, setScreenval] = useState(false);

  useEffect(() => {
    if (width < 430) {
      setScreenval(true);
    }
  }, [width]);
  return <>{screenVal ? <MobileFooter /> : <FooterSection />}</>;
};

export default Footer;
