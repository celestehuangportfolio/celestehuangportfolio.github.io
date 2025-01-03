"use client";

import { useRouter } from "next/navigation";
import "./navbar.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect fired!", { asPath: router.asPath });
  }, [router.asPath]);
  return (
    <>
      <div className="navbar">
        <div className="title">
          <Link href={"/"}>
            <img src={"/logo.png"} style={{ height: "55px" }}></img>
          </Link>
        </div>
        <div className="menu">
          <Link
            className={
              router.pathname && router.pathname.includes("/work")
                ? "active-menu-items"
                : "menu-items"
            }
            href={"/work"}
          >
            work
          </Link>

          <Link
            className={
              router.pathname && router.pathname.includes("/resume")
                ? "active-menu-items"
                : "menu-items"
            }
            href={"/resume"}
          >
            resume
          </Link>
        </div>
      </div>
      <div className="navbar-placeholder"></div>
    </>
  );
}
