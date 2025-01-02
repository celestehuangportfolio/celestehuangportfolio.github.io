"use client";

import EmblaCarousel from "@/app/components/carousel/EmblaCarousel";
import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDES = Array.from(
    { length: 13 },
    (_, i) => `/mythical/carousel-${i + 1}.jpg`
  );
  const windowwidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">@Mythical</div>
        <div className="selected-work-description">
          Mythical is an internet-first entertainment studio founded by Rhett &
          Link. The company’s owned & operated YouTube channels have amassed 75
          million subscribers and 25 billion lifetime views, and its combined
          following on Instagram, Facebook, Twitch, Snap, TikTok, and Twitter
          exceeds 45 million. <br></br>
          <br></br>Lead the ongoing social strategy and promotional plans that
          drives audience growth and discovery for all Mythical properties on
          Facebook, Instagram, TikTok, X/Twitter, and Snapchat. Developed
          content & trend-based strategies that drive audience growth,
          engagement, and discovery.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="carosel-container">
        <div className="carosel-title">01 - Memes, Trends, and Pop Culture</div>
        <br></br>
        <div className="carosel-description">
          Sourced popular trends, memes and pop culture moments to transform
          them into brand-related posts. Watch daily long form content and
          pulled engaging moments to post across all social platforms. Applied
          brand voice to copy/captions.
        </div>
        <br />
        <br />
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <br></br>
      <br />
      <br />
      <div className="selected-work-grid">
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/nRj1LzJfy2U?si=so8NP_FnU0swfhuL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"02 - Social Cutdowns"}
            videoDescription={
              "Watched long form content from Good Mythical Morning and Good Mythical More. Pulled engaging moments to post across TikTok, Instagram, and Facebook. Programmed content and used best practices and specific platform posting times for optimal engagement. \n\n Gathered over 25M+ views monthly across all platforms."
            }
          />
        </div>
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <iframe
                width={windowwidth > 550 ? "500" : "300"}
                height={windowwidth > 550 ? "500" : "300"}
                src="https://www.youtube.com/embed/jvqk3bj57LA?si=OE1nV3KC11eSYmWYL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
            videoTitle={"03 - Trending Audio & Video Pitches"}
            videoDescription={
              "Pitched and executed trending audios and videos with brand voice. Catered to fans familiar with our content and also reaching new audiences on TikTok, Instagram and X/Twitter by using generic, familiar copy and captions."
            }
          />
        </div>
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <img
                style={{ height: "400px", width: "auto", objectFit: "contain" }}
                src="/mythical/04-community-management.png"
              ></img>
            }
            videoTitle={"04 - Community Management"}
            videoDescription={
              "Engaged with fans and casual watchers across all platforms. Interacted with brand accounts and building relationships. Occasionally owning up to some spelling mistakes (we’re all human!) and making a funny joke out of it."
            }
          />
        </div>
        <div className="selected-work-grid-item">
          <WorkCard
            element={
              <img
                style={{ height: "400px", width: "auto", objectFit: "contain" }}
                src="/mythical/05-monthly-newsletter.png"
              ></img>
            }
            videoTitle={"05 - Monthly Newsletter"}
            videoDescription={
              "Drafted copy for monthly newsletter that served a recap of what’s happening at Mythical. Worked alongside the design team to curate a template for newsletter. Sourced images correlated to each section. Sent additional newsletters when necessary to promote new, large marketing projects."
            }
          />
        </div>
      </div>
    </div>
  );
}
