import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="min-h-[calc(100vh-150px)] container mx-auto max-w-[1150px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
