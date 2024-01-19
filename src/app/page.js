import Image from "next/image";
import Marquee from "react-fast-marquee";
import blueHand from "../../public/blue_hand.svg";
import recruitment from "../../public/recruitment.png";
import assessments from "../../public/assessments.png";
import skill from "../../public/skill.png";
import badges from "../../public/badges.png";
import profile from "../../public/profilecard.png";
import ProjectCard from "./components/common/ProjectCard"

export default function Home() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="flex flex-col items-center bg-[url('../../public/background.jpg')] bg-no-repeat bg-contain bg-top">
      <section className="flex w-full  flex-col justify-center items-center py-12">
        <div className="font-extrabold text-[70px]">
          A place to show your skills to
        </div>
        <div className="font-extrabold text-[102px] -mt-[44px]">
          / Recruiters..
        </div>
        <div className="text-[32px] text-center leading-10">
          We help people to find the best skilled people to recruit, learn,
          <span className="block">mentor & network with each other.</span>
        </div>
        <button className="btn relative mt-4 h-[48px] min-w-[300px] rounded-[18px] text-[#1A1A1A] bg-[#FFD17B] border-transparent hover:bg-[#FFD17B] hover:border-transparent">
          <Image
            src={blueHand}
            alt="contact"
            width={52}
            height={50}
            className="absolute right-[-16px]"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="font-extrabold inline-block text-base">
            START YOUR TEST FOR <span className="line-through">$19</span>
            <div className="font-extrabold text-[16px] absolute right-8 -bottom-1 -rotate-12">
              FREE
            </div>
          </div>
        </button>
        <div className="text-[12px] text-center font-bold opacity-70">
          Limited time offer.
        </div>
        <div className="flex flex-row w-full mt-20 overflow-x-scroll [&>*:nth-child(1)]:ml-4">
          {items.map((item) => (
            <ProjectCard key={item}/>
          ))}
        </div>
      </section>
      <section className="flex flex-row justify-center mt-16 mb-20">
        <div className="mr-8 flex flex-col justify-center">
          <div className="text-7xl font-extrabold [&>span]:block">
            Stop doing <span>recruitment tasks</span> <span>for every</span>{" "}
            <span>company.</span>
          </div>
          <div className="text-3xl mt-8 font-normal [&>span]:block">
            <span>One assessment of you in "I GOT SKILLS" should</span>{" "}
            <span>be the scale for the recruiters to decide up on.</span>{" "}
            <span>Update your skills by taking more tests when you</span>{" "}
            <span>learn new.</span>
          </div>
        </div>
        <Image
          src={recruitment}
          alt="recruitment"
          width={443}
          height={492}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className="flex flex-row justify-center mt-16 mb-20">
        <Image
          src={assessments}
          alt="assessments"
          width={443}
          height={492}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div className="ml-8 flex flex-col justify-center">
          <div className="text-7xl font-extrabold [&>span]:block">
            Complete simple tasks <span>& assessments to</span>{" "}
            <span>show your expertise.</span>
          </div>
          <div className="text-3xl mt-8 font-normal [&>span]:block">
            Tackle straightforward tasks and assessments to
            <span>demonstrate your tech prowess. We will manually</span>
            <span>assess and award you badges in your profile.</span>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-center mt-16 mb-20">
        <div className="mr-8 flex flex-col justify-center">
          <div className="text-7xl font-extrabold [&>span]:block">
            Let recruiters know
            <span>your skill better & </span>
            <span>faster.</span>
          </div>
          <div className="text-3xl mt-8 font-normal [&>span]:block">
            Instead of long & multiple interviews, get to the
            <span>point faster by showing off your I GOT SKILLS</span>
            <span>badges in your resume & get that job faster.</span>
          </div>
        </div>
        <Image
          src={skill}
          alt="skill"
          width={443}
          height={492}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className="flex flex-col mt-32 items-center">
        <div className="text-7xl font-extrabold text-center">
          Hundreds of badges up for grabs
        </div>
        <div className="text-3xl mt-8 font-normal">
          We got almost every major skill badge for you to equip in your resumes
          & social profiles.
        </div>
        <div className="w-full h-[400px]">
          <Marquee>
            <Image
              src={badges}
              alt="badges"
              width={527}
              height={400}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <Image
              src={badges}
              alt="badges"
              width={527}
              height={400}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <Image
              src={badges}
              alt="badges"
              width={527}
              height={400}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Marquee>
        </div>
        <button className="btn relative mt-4 h-[48px] min-w-[300px] rounded-[18px] text-[#1A1A1A] bg-[#FFD17B] border-transparent hover:bg-[#FFD17B] hover:border-transparent">
          <Image
            src={blueHand}
            alt="contact"
            width={52}
            height={50}
            className="absolute right-[-16px]"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="font-extrabold inline-block text-base">
            START YOUR TEST FOR <span className="line-through">$19</span>
            <div className="font-extrabold text-[16px] absolute right-8 -bottom-1 -rotate-12">
              FREE
            </div>
          </div>
        </button>
        <div className="text-[12px] text-center font-bold opacity-70">
          Limited time offer.
        </div>
      </section>
      <section className="flex flex-col mt-32 items-center">
        <div className="text-7xl font-extrabold text-center">
          Say it loud that "I GOT SKILLS"
        </div>
        <div className="text-3xl mt-8 font-normal [&>span]:block text-center">
          I GOT SKILLS provides a streamlined{" "}
          <span>recruitment process for the new generation of talent.</span>
        </div>
        <Image
          src={profile}
          alt="profile"
          width={1224}
          height={700}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>
    </div>
  );
}
