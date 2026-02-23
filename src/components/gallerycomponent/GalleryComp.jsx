import React from "react";
import gallery8 from "../../assets/gallery/gallery8.jpeg";
import gallery10 from "../../assets/gallery/gallery10.jpeg";
import gallery16 from "../../assets/gallery/gallery16.jpeg";
import gallery18 from "../../assets/gallery/gallery18.jpeg";
import gallery19 from "../../assets/gallery/gallery19.jpeg";
import gallery20 from "../../assets/gallery/gallery20.jpeg";
import gallery21 from "../../assets/gallery/gallery21.jpg";
import gallery22 from "../../assets/gallery/gallery22.jpg";
import gallery23 from "../../assets/gallery/gallery23.jpg";
import gallery24 from "../../assets/gallery/gallery24.jpg";
import gallery25 from "../../assets/gallery/gallery25.jpg";
import gallery26 from "../../assets/gallery/gallery26.jpg";
import gallery27 from "../../assets/gallery/gallery27.jpg";
import gallery28 from "../../assets/gallery/gallery28.jpg";
import gallery29 from "../../assets/gallery/gallery29.jpg";
import gallery30 from "../../assets/gallery/gallery30.jpg";
import gallery31 from "../../assets/gallery/gallery31.jpg";
import gallery from "../../data/gallery.json";

const galleryMap = {
  "gallery8.jpeg": gallery8,
  "gallery10.jpeg": gallery10,
  "gallery16.jpeg": gallery16,
  "gallery18.jpeg": gallery18,
  "gallery19.jpeg": gallery19,
  "gallery20.jpeg": gallery20,
  "gallery21.jpg": gallery21,
  "gallery22.jpg": gallery22,
  "gallery23.jpg": gallery23,
  "gallery24.jpg": gallery24,
  "gallery25.jpg": gallery25,
  "gallery26.jpg": gallery26,
  "gallery27.jpg": gallery27,
  "gallery28.jpg": gallery28,
  "gallery29.jpg": gallery29,
  "gallery30.jpg": gallery30,
  "gallery31.jpg": gallery31,
};

const GalleryComp = () => {
  const firstImage = gallery.slice(0, 1);
  const remainingImages = gallery.slice(1);

  return (
    <div className="w-[94%] mx-auto my-7">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mx-auto mt-5">
        {firstImage.map((data) => (
          <div
            key={data.id}
            className="md:col-span-2 bg-[#dcd9d9] rounded-t-lg"
          >
            <img
              src={galleryMap[data.image]}
              className="w-full h-75 object-cover rounded-md"
            />
          </div>
        ))}

        {remainingImages.map((data) => (
          <div key={data.id} className="bg-[#dcd9d9] rounded-t-lg">
            <img
              src={galleryMap[data.image]}
              className="w-full h-75 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComp;
