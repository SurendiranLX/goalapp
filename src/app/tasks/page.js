import Image from "next/image";
import Marquee from "react-fast-marquee";
import TaskCard from "../components/common/taskcard";

export default function Tasks() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="flex flex-col items-start w-full max-w-screen-xl">
      <h1 className="font-extrabold text-5xl mt-6 mb-2">Available tasks</h1>
      {/* Filter-by start */}
      <div className="bg-white h-[128px] w-full rounded-[64px] mb-10 flex flex-row items-center">
        <div className="font-bold text-2xl mr-6 flex-shrink-0 ml-5">
          Filter by
        </div>
        <div className="flex flex-row">
          <div class="badge bg-black text-white  w-[138px] h-[48px] text-lg cursor-pointer">
            ALL
          </div>
          <div className="flex flex-row overflow-x-scroll">
            {items.map((item) => (
              <div
                key={item}
                class="badge min-w-[50px] h-[48px] flex-shrink-0 text-lg border-[#1A1A1A] mx-2 px-4 cursor-pointer"
              >
                <Image src="/react.jpg" alt="" width={20} height={20} />
                <span>React Native</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Filter-by end */}
      <div className="grid grid-cols-4 grid-rows-3 gap-x-10 gap-y-10 mb-14">
        {items.map((item) => (
          <TaskCard
            key={item}
            image="/3dcard.png"
            title="Gyro based 3D Card"
            tags={["React Native", "Level 1"]}
          />
        ))}
      </div>
    </div>
  );
}
