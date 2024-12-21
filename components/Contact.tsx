import { socialMedia } from "@/data";
import React from "react";

const Contact = () => {
  return (
    <div className=" z-30 h-auto w-full flex justify-center items-center pb-10 relative">
      <div className="md:gap-3 gap-6 flex flex-row">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <a href={info.link} target="_blank">
              <img src={info.img} alt="icons" width={50} height={50} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
