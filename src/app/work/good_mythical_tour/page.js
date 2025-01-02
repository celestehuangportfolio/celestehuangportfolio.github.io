"use client";

import BigCard from "@/app/components/bigcard/bigCard";
import WorkCard from "@/app/components/workcard/workCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windoWidth = useWindowWidth();

  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">Good Mythical Tour</div>
        <div className="selected-work-description">
          Rhett & Link and the Mythical Crew are live and in-person for a night
          that will bring their loveable YouTube show to life — featuring
          favorite segments, classic games, music, mayhem, Mythicality, and
          more! <br></br>
          <br></br>Produced and programmed photo and video assets to promote
          each city stop across Instagram, TikTok, and X/Twitter for live
          posting.
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
          title={"01 - Social Campaigns"}
          description={
            "Captured and published live tour photo and video assets across Instagram, TikTok, and X/Twitter to effectively promote each tour show and merchandise table."
          }
          direction={windoWidth > 768 ? "left" : "right"}
        />
        <br />
      </div>
      <div className="flex-row switch-col" style={{ gap: "10px" }}>
        <WorkCard
          element={
            <iframe
              width={windoWidth > 550 ? "400" : "300"}
              height={windoWidth > 550 ? "400" : "300"}
              src="https://www.youtube.com/embed/UzBQW_CPpRk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          }
          title={""}
          description={""}
        />
        <WorkCard
          element={
            <img
              style={{
                height: windoWidth > 550 ? "400px" : "300px",
                objectFit: "contain",
              }}
              src="/mythicaltour/mythical_tour.png"
            ></img>
          }
          title={""}
          description={""}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
