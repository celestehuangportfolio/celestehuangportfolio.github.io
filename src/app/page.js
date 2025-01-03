"use client";

import useWindowWidth from "./hooks/windowwidth";
import "./page.css";
import Link from "next/link";

export default function Page() {
  const windoWidth = useWindowWidth();

  return (
    <div className="home">
      <div className="home-celeste">Hi, my name is Celeste Huang.</div>
      <div className="home-title">
        {windoWidth > 1400 ? (
          <div className="title-container">
            <div className="top">
              <div className="top-title">
                Social Media Strategist{" "}
                <div>
                  <span className="home-and">&</span>
                </div>
              </div>
              <div className="top-block"></div>
            </div>

            <div className="bottom">
              <div className="bottom-block"></div>
              <div className="bottom-title">Community Manager</div>
            </div>
          </div>
        ) : (
          <div className="flex-column center ">
            <div>
              <div className="top-title">Social Media Strategist</div>
              <div>
                <span className="home-and">&</span>
              </div>
            </div>
            <div>
              <div className="bottom-title">Community Manager</div>
            </div>
          </div>
        )}
      </div>

      <div>
        <Link href={"work"}>
          <button className="home-buttons">work</button>
        </Link>
        <Link href={"resume"}>
          <button className="home-buttons">resume</button>
        </Link>
      </div>
    </div>
  );
}
