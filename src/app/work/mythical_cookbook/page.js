"use client";

import BigCard from "@/app/components/bigcard/bigCard";
import useWindowWidth from "@/app/hooks/windowwidth";

export default function Page() {
  const windoWidth = useWindowWidth();
  return (
    <div className="selected-work">
      <div className="selected-work-header">
        <div className="selected-work-title">THE MYTHICAL COOKBOOK</div>
        <div className="selected-work-description">
          From the larger-than-life team behind the internet’s most-watched
          daily show, Good Mythical Morning, and culinary spinoff, Mythical
          Kitchen, a New York Times #1 Best Seller cookbook with 100 recipes for
          living a Mythical, and delicious, life. <br></br>
          <br></br>Programmed social and marketing campaigns across TikTok,
          Instagram & X/Twitter to promote The Mythical Cookbook.
        </div>
      </div>
      <div className="curved-edge"></div>
      <div className="flex-column">
        <BigCard
          element={
            <img
              style={{ height: "fit-content", width: "auto" }}
              src="/mythicalcookbook/01-social-6.png"
            ></img>
          }
          title={"01 - Social Campaigns"}
          description={
            "Sourced product and image photos from The Mythical Cookbook photoshoot. Established a weekly countdown to the official launch. Composed copy that aligned with product images, specific deadlines and CTAs."
          }
          direction={"right"}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="flex-row switch-col" style={{ gap: "50px" }}>
        <img
          style={{ height: "400px", width: "auto", objectFit: "contain" }}
          src="/mythicalcookbook/triple-1.png"
        ></img>
        <img
          style={{ height: "400px", width: "auto", objectFit: "contain" }}
          src="/mythicalcookbook/triple-2.png"
        ></img>
        <img
          style={{ height: "400px", width: "auto", objectFit: "contain" }}
          src="/mythicalcookbook/triple-3.png"
        ></img>
      </div>
      <br />
      <div className="flex-row">
        “Who says you can’t play with your food? That’s the Mythical way!”
      </div>
      <br />
      <br />
      <br />
      <div className="flex-column">
        <BigCard
          element={
            <img
              style={{ height: "400px", width: "auto", objectFit: "contain" }}
              src="/mythicalcookbook/02-offsite.png"
            ></img>
          }
          title={"02- Off-Site Promos/Shoots"}
          description={
            "Travelled off-site to shoot with collaborators like Pink’s Hot Dogs to promote The Mythical Cookbook. Filmed, edited and programmed in real time Instagram Grid & Stories and X/Twitter assets."
          }
          direction={windoWidth > 768 ? "left" : "right"}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
