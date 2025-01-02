"use client";

import React, { useState, useEffect } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./globals.css";

export default function DashboardLayout({ children }) {
  const [currPath, setCurrPath] = useState("");

  useEffect(() => {
    setCurrPath(window.location.pathname);
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar currPath={currPath} setCurrPath={setCurrPath} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
