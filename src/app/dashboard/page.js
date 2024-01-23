import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import GoalCard from "../components/common/goalcard";

import photo1 from "../../../public/photo1.jpg";
import photo2 from "../../../public/photo2.jpg";
import photo3 from "../../../public/photo3.jpg";
import photo4 from "../../../public/photo4.jpg";

const imageUrl =
  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

const goalData = [
  {
    name: "Three-Day Dinner Routine",
    time: "6 Days 40 Mins",
    category: "Food",
    joinedUsers: [
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      // "/path/to/photo2.jpg",
      // "/path/to/photo3.jpg",
      // "/path/to/photo4.jpg",
    ],
    joinedCount: 5,
  },
  {
    name: "Learn to Play the Guitar",
    time: "1 Days 20 Mins",
    category: "Music",
    joinedUsers: [
      "../../photo5.jpg",
      "/path/to/photo6.jpg",
      "/path/to/photo7.jpg",
      "/path/to/photo8.jpg",
    ],
    joinedCount: 8,
  },
  {
    name: "Complete Reading 2 Books",
    time: "1 hour 20 Mins",
    category: "Book",
    joinedUsers: [
      "../../photo5.jpg",
      "/path/to/photo6.jpg",
      "/path/to/photo7.jpg",
      "/path/to/photo8.jpg",
    ],
    joinedCount: 7,
  },
  {
    name: "Run a 5K Race",
    time: "1 Days 10 Mins",
    category: "Fitness",
    joinedUsers: [
      "../../photo5.jpg",
      "/path/to/photo6.jpg",
      "/path/to/photo7.jpg",
      "/path/to/photo8.jpg",
    ],
    joinedCount: 3,
  },
  {
    name: "Build Strength and Endurance",
    time: "1 Days 40 Mins",
    category: "Fitness",
    joinedUsers: [
      "../../photo5.jpg",
      "/path/to/photo6.jpg",
      "/path/to/photo7.jpg",
      "/path/to/photo8.jpg",
    ],
    joinedCount: 2,
  },
];

export default function Dashboard() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="w-full h-[100vh] relative">
      {/* Header */}
      <div className="flex flex-row items-center h-[80px] bg-[#ffffff20] px-[16px] w-full">
        <div className="avatar">
          <div className="w-8 rounded-full bg-slate-400">
            <Image
              src="/public/3dcard.png"
              alt="igotskills"
              width={32}
              height={32}
              className="mx-8"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
        <div className="font-bold text-lg ml-2 text-white">Diptiranjan</div>
      </div>
      {/* List */}
      <div className="flex flex-col px-[16px] mt-6 relative h-[calc(100vh-120px)] pb-[80px] overflow-y-scroll">
        {/* Map items */}
        {goalData.map((goal, index) => (
          <GoalCard key={index} {...goal} />
        ))}
      </div>
      <div className="absolute w-full flex justify-center bottom-6">
        <Link href="/create">
          <button className="btn btn-success rounded-full text-white justify-center">
            Create New Goal
          </button>
        </Link>
      </div>
    </div>
  );
}
