"use client";

import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windowwidth = useWindowWidth();
  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">@Mythical Society</div>
        <div className="selected-work-description">
          The Mythical Society, a Memberful paid membership program, is for the
          hardcore fandom/community of Rhett & Link to gain access to
          never-before-seen footage, exclusive merch, sneak peeks, original
          series, and more. <br></br>
          <br></br>Worked alongside the Mythical Society team to promote
          exclusive special videos, series, and livestreams. Programmed a
          marketing calendar, wrote copy, and created selected clips to properly
          promote each launch. Our objective was to drive traffic towards the
          Mythical Society website and boost membership purchases.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="flex-column">
        <div className="flex-row switch-col" style={{ alignItems: "start" }}>
          <div className="selected-work-grid-item">
            <WorkCard
              element={
                <iframe
                  width={windowwidth > 550 ? "500" : "300"}
                  height={windowwidth > 550 ? "500" : "300"}
                  src="https://www.youtube.com/embed/BVXlPLAJ1CA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              }
              videoTitle={
                "01 - Social Campaign For Rhett, Link, & Stevie Go To Universal Hollywood Horror Nights."
              }
              videoDescription={
                "Worked alongside Social Media Producer by finding trending audios and videos to promote the Halloween Horror exclusive special."
              }
            />
          </div>
          <div className="selected-work-grid-item">
            <WorkCard
              element={
                <iframe
                  width={windowwidth > 550 ? "500" : "300"}
                  height={windowwidth > 550 ? "500" : "300"}
                  src="https://www.youtube.com/embed/72pjT-4R4xY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              }
              videoTitle={
                "02 - Social Campaign For Rhett & Stevie Go Apocalypse Survival"
              }
              videoDescription={
                "Pitched and produced social campaigns by using trending audios and videos to promote this exclusive series."
              }
            />
          </div>
        </div>
        <div className="selected-work-grid-item selected-work-center">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/yAqgIPjB6kI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"03 - Marketing Campaign For Roll For Mythicality"}
            videoDescription={
              "Selected and cutdown clips from each episode to promote each weekly episode launch. Communicated with talent on social post collaborations."
            }
          />
        </div>
      </div>
    </div>
  );
}
