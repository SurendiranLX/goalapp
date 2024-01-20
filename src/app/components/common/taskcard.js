import React from "react";
import Image from "next/image";

const TaskCard = ({ key }) => {
  return (
    <div
      key={key}
      className="w-[270px] h-[270px] flex-shrink-0 inline-block float-left rounded-[24px] relative overflow-x-scroll mr-4"
    >
      <Image
        src="/3dcard.png"
        alt="igotskills"
        size={270}
        fill
        style={{
          objectFit: "cover",
        }}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <div className="bg-[#000]/40 backdrop-blur-md absolute bottom-0 px-2 py-2">
        <div className="text-[13px] text-white leading-4">
          Gyro based 3D Card in React app using Reanimated 2
        </div>
        <div className="text-xs text-white mt-2">By Swng Pvt. Ltd.</div>
        <div className="flex flex-row mt-2">
          <div className="text-sm min-w-[80px] px-2 h-[24px] border-[0.5px] border-[#fff] rounded-[24px] mr-2 text-white">
            React Native
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
