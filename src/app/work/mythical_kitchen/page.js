"use client";

import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windowwidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">@mythicalkitchen</div>
        <div className="selected-work-description">
          Mythical Kitchen is a web series that features Josh Scherer and the
          Mythical team creating fun, sometimes chaotic recipes that are
          inspired by nostalgia. The show is known for demystifying cooking, and
          for its celebrity guests on shows like Last Meals and eye-catching
          dishes. <br></br>
          <br></br>Lead the ongoing social strategy and promotional plans that
          drives audience growth and discovery for all Mythical Kitchen
          properties on Facebook, Instagram, Snapchat, and TikTok. Developed
          content & trend-based strategies that drive audience growth,
          engagement, and discovery.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="flex-row switch-col">
        <div className="flex-column">
          <div className="selected-work-grid-item selected-work-left">
            <WorkCard
              element={
                <iframe
                  width={windowwidth > 550 ? "500" : "300"}
                  height={windowwidth > 550 ? "500" : "300"}
                  src="https://www.youtube.com/embed/WAdIkIFrESw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              }
              videoTitle={"01 - Trending Audio & Video Pitches"}
              videoDescription={
                "Pitched and executed trending audios and videos with brand voice. Catered to fans familiar with our content and also reaching new audiences on TikTok, Instagram and X/Twitter by using generic, familiar copy and captions. Gathered over 8M+ views monthly."
              }
            />
          </div>
        </div>
        <div className="flex-column">
          <div className="selected-work-grid-item selected-work-right">
            <WorkCard
              element={
                <img
                  style={{
                    height: "auto",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src="/mythicalkitchen/02-community-management.png"
                ></img>
              }
              videoTitle={"02 - Community Management"}
              videoDescription={
                "Engaged with fans and casual watchers across all platforms. Interacted with brand accounts and building relationships. Occasionally owning up to some spelling mistakes (we’re all human!) and making a funny joke out of it."
              }
            />
          </div>
          <div className="selected-work-grid-item selected-work-right selected-work-uplift">
            <WorkCard
              element={
                <img
                  style={{
                    height: "auto",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src="/mythicalkitchen/03-episode-promotion-carousel-posts.png"
                ></img>
              }
              videoTitle={"03 - Episode Promotion Carousel Posts"}
              videoDescription={
                "Worked alongside Mythical Kitchen Producer to source images for weekly episode launches. Programmed and wrote copy with brand voice."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
