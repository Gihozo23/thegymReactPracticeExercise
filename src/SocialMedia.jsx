import React from "react";

function SocialMedia(props) {
  return (
    <div className="border-2 border-white rounded-full w-12 h-12 flex justify-center items-center hover:text-[#6372ff] hover:bg-white">
      <img src={props.image} alt="" className="w-5" />
    </div>
  );
}

export default SocialMedia;
