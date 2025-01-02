"use client";

import BigCard from "@/app/components/bigcard/bigCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windoWidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">Rhett & Link’s Wonderhole</div>
        <div className="selected-work-description">
          From outrageous challenges to heartwarming encounters, through
          docu-comedy, music and sketch Rhett and Link's Wonderhole (a series on
          YouTube) pushes the boundaries of entertainment, delivering an
          experience that is both hilarious and thought-provoking. <br></br>
          <br></br>Programmed a marketing calendar for countdown of series
          release. Created clips and cutdowns from each episode’s weekly launch
          which were posted to Instagram, TikTok, YouTube Shorts, and X/Twitter
          with over 25M+ views total.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="flex-column">
        <BigCard
          element={
            <img
              style={{ height: "400px", width: "auto", objectFit: "contain" }}
              src="/mythicalwonderhole/wonderhole_carousel.png"
            ></img>
          }
          title={"01 - Series Launch Event"}
          description={
            "Captured backstage footage, communicated with talent and celebrities for social assets, and utilized trending audio to promote the premiere of the series."
          }
          direction={windoWidth > 768 ? "left" : "right"}
        />
        <br />
        <BigCard
          element={
            <div className="flex-column">
              <iframe
                width={windoWidth > 550 ? "400" : "300"}
                height={windoWidth > 550 ? "400" : "300"}
                src="https://www.youtube.com/embed/nEy1syt72A8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <img
                style={{
                  width: windoWidth > 550 ? "400px" : "300px",
                  objectFit: "contain",
                }}
                src="/mythicalwonderhole/wonderhole_caption.png"
              ></img>
            </div>
          }
          title={"02 - Social Campaign"}
          description={
            "Worked alongside Social Media Content Creator by selecting clips from each episode and performing quality control rounds for finalized clips. Created a marketing calendar for each launch and published each clip to Instagram, TikTok, X/Twitter, and YouTube Shorts."
          }
          direction={"right"}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
