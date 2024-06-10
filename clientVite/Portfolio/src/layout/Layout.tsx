import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="d-flex justify-content-end align-items-center bg-dark  text-info"
      style={{position: "relative" }}
    >
      <div className="w-100" style={{ height: "100%" }}>
        <motion.div className="switch-container" layout layoutRoot>
          <motion.div className="switch-handle" layout>
            {children}
          </motion.div>
        </motion.div>
      </div>

      <div
        className=" d-flex justify-content-start align-items-center"
        style={{ position: "fixed", zIndex: "1"  , top:"100px"}}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
