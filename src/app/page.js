import Image from "next/image";
import Link from "next/link";
import card from "../../public/welcome.png";


import Marquee from "react-fast-marquee";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="w-full h-full">
      <div class="w-full carousel rounded-box h-[80vh]">
        <div class="carousel-item w-full bg-[#000] flex flex-col justify-center px-8 items-start">
          <Image
            src={card}
            alt="igotskills"
            width={300}
            height={300}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="text-2xl font-extrabold text-white w-full  text-wrap">
            Welcome to GoalBuds! 🚀
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-[20vh] items-center">
        <Link href="/dashboard">
          <button className="btn btn-active bg-[#fff] hover:bg-[#fff] text-black hover:text-black items-center">
            <Image
              src="/gogole.svg"
              alt="igotskills"
              width={30}
              height={30}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <span>Login with Google</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
