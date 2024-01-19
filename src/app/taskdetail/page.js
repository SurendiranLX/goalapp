"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ProjectCard from "./../components/common/ProjectCard";
import TaskProgress from "../components/common/taskprogress";
import TaskUpload from "../components/common/taskUpload";

export default function TaskDetail() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };
  return (
    <div className="flex flex-row placeholder items-start w-full max-w-screen-xl mt-6 mb-12">
      <div className="flex-1 mr-4">
        <div class="badge min-w-[50px] h-[48px] flex-shrink-0 text-lg border-[#1A1A1A] px-4 cursor-pointer">
          <Image
            src="/react.jpg"
            alt=""
            width={20}
            height={20}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <span>React Native</span>
        </div>
        <h1 className="font-extrabold text-5xl mt-2 mb-2">
          Gyro based 3D Card in React app using Reanimated 2
        </h1>
        <div className="text-[#373633] font-bold">By Swng Pvt. Ltd.</div>
        {/* Task Progress */}
        <TaskProgress onClick={openModal} />
        {/* Task Progress End*/}

        {/* Task Submit */}
        <TaskUpload ref={modalRef} status={false} />
        {/* Task Submit End */}

        <div className="font-bold mt-6 text-2xl">Task Brief</div>
      </div>
      <div className="w-[423px]">
        <div className="rounded-[58px] w-[423px] h-[423px] overflow-hidden">
          <Image
            src="/taskimage.jpg"
            alt=""
            width={423}
            height={423}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="bg-white rounded-[58px] mt-8 p-8">
          <div className="font-bold text-xl">
            Checklist to validate task completion ✅
          </div>
          <div className="mt-4">
            <ul>
              <li>🎯 Criteria for Evaluation: </li>
              <li>
                🎯 Code Quality: We're on the lookout for maintainable, clean,
                and methodically organized code.
              </li>
              <li>
                🎯 UI/UX: Ensure the animation is seamless, and the design
                emulates the attached prototype with precision.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
