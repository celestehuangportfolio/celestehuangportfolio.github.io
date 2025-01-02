"use client";

import EmblaCarousel from "@/app/components/carousel/EmblaCarousel";
import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDES_1 = Array.from(
    { length: 8 },
    (_, i) => `/wongfu/carousel_1/${i + 1}.jpg`
  );
  const SLIDES_2 = Array.from(
    { length: 7 },
    (_, i) => `/wongfu/carousel_2/${i + 1}.jpg`
  );
  const windowwidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">Wong Fu Productions</div>
        <div className="selected-work-description">
          Wong Fu Productions is an independent digital production company
          founded in 2003. They've amassed over 3M subscribers around the world
          with over 600M views for their dramatic shorts and comedy sketches on
          YouTube. <br></br>
          <br></br>Created and published daily content with established and
          repurposed content for Facebook, Instagram, and Twitter.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="carosel-container">
        <div className="carosel-title">01 - Memes, Trends, and Pop Culture</div>
        <br></br>
        <div className="carosel-description">
          Sourced popular trends, memes and pop culture moments to transform
          them into brand-related posts. Watched daily long form content and
          pulled engaging moments to post across all social platforms.
        </div>
        <br />
        <br />
      </div>
      <EmblaCarousel slides={SLIDES_1} options={OPTIONS} />
      <br></br>
      <br />
      <br />

      <div className="carosel-container">
        <div className="carosel-title">
          02 - Asian Bachelorette Social Campaigns
        </div>
        <br></br>
        <div className="carosel-description">
          Captured behind-the-scenes and necessary photos for social campaigns.
          Interacted and directed talent. Worked on set as Production Assistant
          as needed.
        </div>
        <br />
        <br />
      </div>
      <EmblaCarousel slides={SLIDES_2} options={OPTIONS} />
      <br></br>
      <br />
      <br />
      <div className="carosel-container">
        <div className="carosel-title">
          03 - Dating After College Wardrobe & Social Assistant
        </div>
        <br></br>
        <div className="carosel-description">
          Captured behind-the-scenes and acted as a Wardrobe and Production
          Assistant on set. Traveled to off-site locations. Communicated with
          production team and talents.
        </div>
        <br />
        <img
          style={{
            width: windowwidth > 650 ? "600px" : "350px",
            objectFit: "contain",
          }}
          src="/wongfu/dating.jpg"
        ></img>
        <br />
        <br />
      </div>
    </div>
  );
}
