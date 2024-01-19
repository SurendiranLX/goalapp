import React from "react";
import Image from "next/image";

const TaskProgress = ({onClick}) => {
  return (
    <div className="h-[172px] w-full flex flex-row items-center shadow-md justify-between bg-white rounded-[86px] mt-4 px-8">
      <div className="bg-[#F4F4F4] border-[#707070] rounded-[64px] border ml-4 w-[128px] h-[128px]"></div>
      <div className="flex flex-col flex-1 px-3">
        <div className="text-lg text-[#373633] font-bold">
          Earn this task badge by completing the following task.
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1 mr-2">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div className="w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] bg-[#FFD17B] mr-2"></div>
              <div className="border-dashed w-full border-2 border[#707070]"></div>
            </div>
            <div className="font-bold text-large mt-1">Take task</div>
          </div>
          <div className="flex flex-col flex-1 mr-2">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div className="w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] bg-[#FFD17B] mr-2"></div>
              <div className="border-dashed w-full border-2 border[#707070]"></div>
            </div>
            <div className="font-bold text-large mt-1">Submit Task</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div className="w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] bg-[#FFD17B] mr-2"></div>
            </div>
            <div className="font-bold text-large mt-1">Get Result</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onClick} className="btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000] bg-[#FFD17B] border-none hover:bg-[#FFD17B] hover:border-[#FFD17B]">
          <span className="font-extrabold">I'M TAKING THIS</span>
        </button>
      </div>
    </div>
  );
};

export default TaskProgress;
