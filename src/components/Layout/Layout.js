import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";

import { Toaster } from "react-hot-toast";

const Layout = (porps) => {
  return (
    <div>
      <Headers />
      <main style={{ minHeight: "70vh" }}>
        <Toaster /> {porps.children}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
