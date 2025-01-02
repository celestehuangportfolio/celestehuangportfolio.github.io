import "./work.css";
import Link from "next/link";

export default function Page() {
  const images = [
    { name: "Mythical", image: "/workthumb/1.jpg", route: "mythical" },
    {
      name: "Mythical Kitchen",
      image: "/workthumb/2.jpg",
      route: "mythical_kitchen",
    },
    { name: "Last Meals", image: "/workthumb/3.jpg", route: "last_meals" },
    {
      name: "Mythical Society",
      image: "/workthumb/4.jpg",
      route: "mythical_society",
    },
    {
      name: "Good Mythical Evening",
      image: "/workthumb/5.jpg",
      route: "good_mythical_evening",
    },
    {
      name: "The Mythical Cookbook",
      image: "/workthumb/6.jpg",
      route: "mythical_cookbook",
    },
    {
      name: "Rhett & Link's Wonderhole",
      image: "/workthumb/7.jpg",
      route: "mythical_wonderhole",
    },
    {
      name: "Good Mythical Tour",
      image: "/workthumb/8.jpg",
      route: "good_mythical_tour",
    },
    { name: "React Media", image: "/workthumb/9.jpg", route: "react_media" },
    {
      name: "Wong Fu Productions",
      image: "/workthumb/10.jpg",
      route: "wong_fu",
    },
  ];

  return (
    <div className="grid-body">
      <div className="grid">
        {images.map((image, index) => (
          <Link key={index} href={"/work/" + image.route}>
            <div key={index} className="grid-item">
              <img className="img-boost" src={image.image} alt={image.name} />
              <p>{image.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
