"use client";

import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windowwidth = useWindowWidth();
  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">LAST MEALS</div>
        <div className="selected-work-description">
          Last Meals is a Mythical Kitchen series where Mythical Chef Josh
          Scherer cooks and interviews celebrities about their ideal last meal
          while digging into deep topics. <br></br>
          <br></br>Pitched social video ideas to celebrity guests. Selected and
          clipped moments from each episode for episode social promotions across
          Instagram, Facebook, TikTok, and X/Twitter. Communicated with
          celebrity guests and talent teams for social posting schedule and
          distributed social assets to appropriate teams.
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
                src="https://www.youtube.com/embed/C16uDywAjoA?si=rZu_mgMTtQRL9boi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"01 - Guest Celebrity Social Trends"}
            videoDescription={
              "Pitched trending audio and videos to celebrity guests. Executed and produced approved TikToks, and programmed videos for episode launch. Touched base with talent and social teams after episode launch with social posting schedule and associated social assets."
            }
          />
        </div>
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/xIXFb4YT0D8?si=WnV54bHHzaEsO9BR"
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
