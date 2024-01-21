"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TaskCard from "../components/common/taskcard";
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
          <span className="inline-block ml-1">React Native</span>
        </div>
        <h1 className="font-extrabold text-5xl mt-2 mb-2">
          Gyro based 3D Card in React app using Reanimated 2
        </h1>
        <div className="text-[#373633] font-bold">By Swng Pvt. Ltd.</div>
        {/* Task Progress */}
        <TaskProgress onClick={openModal} status={"nottaken"} />
        {/* Task Progress End*/}

        {/* Task Submit */}
        <TaskUpload ref={modalRef} status={true} />
        {/* Task Submit End */}

        <div className="font-bold mt-6 text-2xl">Task Brief</div>
        {/* Task Description */}
        <div className="flex mt-6"></div>
        {/* Comments */}
        <div className="bg-white rounded-[58px] mt-8 p-8">
          <div className="flex">
            <Image
              src="/comment.svg"
              alt=""
              width={20}
              height={20}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className="font-bold text-xl ml-2">Comments (45)</div>
          </div>
          {/* Comment input box */}
          <div className="mt-4 mb-4">
            <div className="flex">
              <Image
                src="/react.jpg"
                alt=""
                width={74}
                height={74}
                className="rounded-[37px] mr-4 flex-shrink-0"
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <textarea
                placeholder="What are your thoughts on this task?"
                class="textarea textarea-bordered textarea-md w-full"
              ></textarea>
            </div>
            <div className="w-full flex-row flex justify-end mt-4 pb-8 border border-x-transparent border-t-transparent  border-b-[#707070]">
              <button className="btn relative h-[28px] min-w-[168px] rounded-[24px] text-[#fff] bg-[#000] border-[#1A1A1A] hover:bg-[#000] hover:border-[#1A1A1A]">
                <span className="font-extrabold">POST COMMENT</span>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            {/* comments */}
            <div className="flex my-4">
              <Image
                src="/react.jpg"
                alt=""
                width={74}
                height={74}
                className="rounded-[37px] mr-4 flex-shrink-0"
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div>
                <div>
                  <span className="text-md font-bold inline-block mr-2">
                    @Muggi
                  </span>
                  <span className="text-sm opacity-60">2 hours ago</span>
                </div>
                <div className="mt-2 text-sm">
                  I think this project can be built up on react js with that
                  reanimated 2 package. Make sure download the latest one from
                  this link https://www.reanimated.com/v2.213
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-row flex justify-center mt-4 pb-8">
            <button className="btn relative h-[28px] min-w-[168px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
              <span className="font-extrabold">SHOW MORE</span>
            </button>
          </div>
        </div>
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
        {/* Checklist */}
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
        {/* Task Accecpted  */}
        <div className="bg-white rounded-[58px] mt-8 p-8">
          <div className="font-bold text-xl">Task accepted by (74)</div>
          <div className="mt-4">
            <ul>
              <li className="flex flex-row items-center mb-4">
                <Image
                  src="/taskimage.jpg"
                  alt=""
                  width={52}
                  height={52}
                  className="rounded-[26px]"
                  // blurData URL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className="flex flex-col ml-2">
                  <div className="text-md font-bold">@Muggi</div>
                  <div className="text-sm font-light">Mugesh Murugan</div>
                </div>
              </li>
              <div className="my-4 text-sm text-center">+53 more</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
