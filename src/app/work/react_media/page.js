"use client";

import EmblaCarousel from "@/app/components/carousel/EmblaCarousel";
import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDES_1 = Array.from(
    { length: 10 },
    (_, i) => `/reactmedia/carousel_1/${i + 1}.png`
  );
  const SLIDES_2 = Array.from(
    { length: 9 },
    (_, i) => `/reactmedia/carousel_2/${i + 1}.jpg`
  );
  const windowwidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">React Media</div>
        <div className="selected-work-description">
          React Media, formerly known as FBE, is an internet media company
          founded by Rafi and Benny Fine. The companies channels have
          accumulated over eight billion views and over 32 million subscribers,
          as well as over 10 million followers on Facebook, Snapchat, Instagram,
          Twitter, and TikTok. <br></br>
          <br></br>Directly manage, create, and publish daily content with
          established and repurposed content on Facebook, Instagram, Twitter,
          and TikTok.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="carosel-container">
        <div className="carosel-title">01 - Memes, Trends, and Pop Culture</div>
        <br></br>
        <div className="carosel-description">
          Sourced popular trends, memes and pop culture moments to transform
          them into brand-related posts. Watched daily long form content and
          pulled engaging moments to post across all social platforms. Applied
          brand voice to copy/captions. Partnered with and direct talent for
          behind-the-scene footage and promotions. Engaged with community.
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
          02 - Guest Celebrity Social Promotions
        </div>
        <br></br>
        <div className="carosel-description">
          Interacted with talent and celebrity teams for on-site and off-site
          shoots. Communicated with external talent and social teams for posting
          schedules and approvals.
        </div>
        <br />
        <br />
      </div>
      <EmblaCarousel slides={SLIDES_2} options={OPTIONS} />
      <br></br>
      <br />
      <br />
      <div className="carosel-container">
        <div className="carosel-title">03 - Membership Community Program</div>
        <br></br>
        <div className="carosel-description">
          Launched and assisted with the membership program, FBE Super, by
          engaging with the community via Discord and website, answering
          questions for customer service issues, and participating in exclusive
          livestreams. Drafted weekly newsletter. Be talent and producer for
          segments.
        </div>
        <img
          style={{
            width:
              windowwidth > 1300
                ? "1200px"
                : windowwidth > 768
                ? "700px"
                : "300px",
            objectFit: "contain",
          }}
          src="/reactmedia/member.png"
        ></img>
      </div>
    </div>
  );
}
