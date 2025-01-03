"use client";

import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windowwidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">GOOD MYTHICAL EVENING</div>
        <div className="selected-work-description">
          Rhett & Link present Good Mythical Evening, the R-rated spin-off of
          Good Mythical Morning, an annual paid one-night-only livestreamed
          event. <br></br>
          <br></br>Produced and programmed 1st, 2nd, 3rd & 4th annual Good
          Mythical Evening social campaigns & marketing promotions across
          TikTok, Instagram, X/Twitter & YouTube Shorts gathering over 7M+ views
          total annually. Worked alongside appropriate teams to organize
          graphics, schedule in-episode promotions and communicate with external
          teams to effectively promote the event.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="selected-work-grid">
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/006HXTMo8wo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"01 - Social Campaigns"}
            videoDescription={
              "Utilized trending audios and videos to promote ticket sales targeted towards our 18+ year old audience across Instagram, TikTok, X/Twitter & YouTube Shorts."
            }
          />
        </div>
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/m2JzmtO_g08"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"02 - Social Campaign"}
            videoDescription={
              "Selected and clipped best engaging moments from episode to create short form content across all platforms. Distributed necessary assets to celebrity guests and their talent teams for external usages."
            }
          />
        </div>
      </div>
    </div>
  );
}
