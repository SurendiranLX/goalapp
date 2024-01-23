import React from "react";
import Link from "next/link";
import Image from "next/image";

import photo1 from "../../../../public/photo1.jpg";
import photo2 from "../../../../public/photo2.jpg";
import photo3 from "../../../../public/photo3.jpg";
import photo4 from "../../../../public/photo4.jpg";

const GoalCard = ({ name, time, category, joinedUsers, joinedCount }) => {
  // Sample data for joined users' profile images
  const samplePhotos = [
    "../../../../public/photo1.jpg",
    "../../../../public/photo2.jpg",
    "../../../../public/photo3.jpg",
    "../../../../public/photo4.jpg",
  ];

  return (
    <Link href="/goaldetail" className="w-full mb-4">
      <div className="w-full h-[140px] rounded-md relative bg-blue-900 p-3 overflow-hidden">
        <div className="text-white font-bold z-[1]">{name}</div>
        <div className="flex z-[1]">
          <span className="text-white text-sm font-normal inline-block mr-1 tracking-widest">
            Ended:
          </span>
          <span className="text-white text-sm font-normal">{time}</span>
        </div>
        <div className="badge badge-accent z-[1]">{category}</div>

        <div className="flex mt-2 items-center flex-row h-[50px] z-[1]">
          <div className="flex flex-row relative w-[100px] h-[30px]">
            {/* {joinedUsers.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`user-${index}`}
                width={32}
                height={32}
                style={{ objectFit: 'cover' }}
                className={`absolute left-[${index * 20}px] rounded-full`}
              />
            ))} */}
            <Image
              src={photo1}
              alt="igotskills"
              width={30}
              height={30}
              style={{ objectFit: "cover" }}
              className="absolute left-0 rounded-full flex-shrink-0"
            />
            <Image
              src={photo2}
              alt="igotskills"
              width={30}
              height={40}
              style={{ objectFit: "contain" }}
              className="absolute left-[20px] rounded-full"
            />
            <Image
              src={photo3}
              alt="igotskills"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              className="absolute left-[40px] rounded-full"
            />
            <Image
              src={photo4}
              alt="igotskills"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              className="absolute left-[60px] rounded-full"
            />
          </div>
          <div className="text-md font-bold text-white">+{joinedCount}</div>
        </div>
        <div className="absolute rounded-md z-0 -ml-3 h-[140px] top-0 min-w-[60%] bg-[#ffffff20]"></div>
      </div>
    </Link>
  );
};

export default GoalCard;
