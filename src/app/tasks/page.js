"use client";

import React, { useState } from "react";
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
        <FilterBar/>
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

// FilterBar

const FilterBar = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    // Toggle the selected state of the tag
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  const items = ["React Native", "JavaScript", "CSS", "HTML"]; // Replace with your actual data

  return (
    <div className="flex flex-row">
      <div
        onClick={() => setSelectedTags([])} // Clear selected tags when "ALL" is clicked
        className={`badge bg-black text-white w-[138px] h-[48px] text-lg cursor-pointer ${
          selectedTags.length === 0 && "bg-black text-white"
        }`}
      >
        ALL
      </div>
      <div className="flex flex-row overflow-x-scroll">
        {items.map((item) => (
          <div
            key={item}
            onClick={() => handleTagClick(item)}
            className={`badge min-w-[50px] h-[48px] flex-shrink-0 text-lg border-[#1A1A1A] mx-2 px-4 cursor-pointer ${
              selectedTags.includes(item) && "bg-black text-white"
            }`}
          >
            <Image src="/react.jpg" alt="" width={20} height={20} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};