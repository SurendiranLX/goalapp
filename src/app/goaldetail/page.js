import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import photo1 from "../../../public/photo1.jpg";
import photo2 from "../../../public/photo2.jpg";
import photo3 from "../../../public/photo3.jpg";
import photo4 from "../../../public/photo4.jpg";

const imageUrl =
  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

export default function Dashboard() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="w-full h-[100vh] relative">
      {/* Header */}
      <div className="flex flex-row relative items-center justify-start h-[80px] bg-[#ffffff20] px-[16px] w-full">
        <div className="flex flex-col">
          <div className="font-bold text-lg text-white">
            Three-Day Dinner Routine
          </div>
          <div className="badge mt-1 badge-accent z-[1]">Cooking</div>
        </div>
      </div>
      <div className="flex flex-col mt-6 relative px-[16px]">
        <div className="text-md font-bold text-white">Description</div>
        <div className="mt-2 text-white ">
          <ul className="list-disc text-white ml-[16px]">
            <li>Day 1: Objective: Explore a New Cuisine</li>
            <li>Day 2: Objective: Home-cooked Comfort</li>
            <li>Day 3: Objective: Support Local Businesses</li>
          </ul>
          <div className="text-md font-bold text-white mt-4 mb-1">Friends</div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                src={photo1}
                alt="igotskills"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className="rounded-full flex-shrink-0"
              />
              <div className="ml-1">Arun Kumar</div>
            </div>
            <div className="bg-[#ffffffb8] rounded-full w-[100%] h-[20px] mt-2">
              <div className="bg-green-500 rounded-full w-[60%] h-[20px]"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-row">
              <Image
                src={photo1}
                alt="igotskills"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className="rounded-full flex-shrink-0"
              />
              <div className="ml-1">Akashy</div>
            </div>
            <div className="bg-[#ffffffb8] rounded-full w-[100%] h-[20px] mt-2">
              <div className="bg-green-500 rounded-full w-[80%] h-[20px]"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-row">
              <Image
                src={photo1}
                alt="igotskills"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className="rounded-full flex-shrink-0"
              />
              <div className="ml-1">Vignesh</div>
            </div>
            <div className="bg-[#ffffffb8] rounded-full w-[100%] h-[20px] mt-2">
              <div className="bg-green-500 rounded-full w-[20%] h-[20px]"></div>
            </div>
          </div>
          <div className="text-md font-bold text-white mt-6">Badges</div>
          <div className="flex flex-row mt-4">
            <div className="bg-[#ffffff30] w-[80px] rounded-full h-[80px] mr-[16px]" />
            <div className="bg-[#ffffff30] w-[80px] rounded-full h-[80px] mr-[16px]" />
            <div className="bg-[#ffffff30] w-[80px] rounded-full h-[80px] mr-[16px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute bottom-3 w-full justify-center">
        <button class="btn btn-success rounded-full mr-3">CHAT</button>
        <button class="btn btn-warning rounded-full">SUBMIT PROGRESS</button>
      </div>
    </div>
  );
}
