import React from "react";
import Image from "next/image";

const TaskProgress = ({ onClick, status }) => {
  const takencount = 20;
  const submitcount = 80;
  return status === "nottaken" ||
    status === "tasktaken" ||
    status === "tasksubmited" ? (
    <div className="h-[172px] w-full flex flex-row items-center shadow-md justify-between bg-white rounded-[86px] mt-4 px-8">
      <div className="bg-[#F4F4F4] border-[#707070] rounded-[64px] border ml-4 w-[128px] h-[128px]"></div>
      <div className="flex flex-col flex-1 px-3">
        <div className="text-lg text-[#373633] font-bold">
          Earn this task badge by completing the following task.
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1 mr-2">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div
                className={`w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] border border-[#707070] bg-[#FFD17B] mr-2`}
              ></div>
              <div
                className={`border-dashed w-full border border-[#FFD17B]`}
              ></div>
            </div>
            <div className="font-bold text-large mt-1">Take task</div>
          </div>
          <div className="flex flex-col flex-1 mr-2">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div
                className={`w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] border border-[#707070] ${
                  status === "tasktaken" || status === "tasksubmited"
                    ? "bg-[#FFD17B]"
                    : ""
                } mr-2`}
              ></div>
              <div
                className={`border-dashed w-full border border-[#707070]`}
              ></div>
            </div>
            <div
              className={`font-bold text-large mt-1 ${
                status === "tasktaken" || status === "tasksubmited"
                  ? ""
                  : "opacity-60"
              }`}
            >
              Submit Task
            </div>
          </div>
          <div className="flex flex-col flex-1 mr-2">
            <div className="flex flex-row flex-1 items-center mt-3">
              <div
                className={`w-[27px] h-[27px] flex-shrink-0 rounded-[13.5px] border border-[#707070] bg-[##FFFFF] mr-2`}
              ></div>
            </div>
            <div className="font-bold text-large mt-1 opacity-60">
              Get Result
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button
          onClick={onClick}
          className={`btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000]  border-none ${
            status === "tasksubmited"
              ? " bg-[#FFD17B90] hover:bg-[#FFD17B90] hover:border-[#FFD17B90]"
              : " bg-[#FFD17B] hover:bg-[#FFD17B] hover:border-[#FFD17B]"
          }`}
        >
          <span className="font-extrabold">
            {status == "tasktaken"
              ? "SUBMIT TASK"
              : status == "tasksubmited"
              ? "In Verification"
              : "I'M TAKING THIS"}
          </span>
        </button>
        <div className="text-xs text-[#373633] items-center justify-center">
          {status === "tasktaken"
            ? `Task taken ${takencount} day${takencount !== 1 ? "s" : ""} ago`
            : status === "tasksubmited"
            ? `Submitted ${submitcount} day${submitcount !== 1 ? "s" : ""} ago`
            : ""}
        </div>
      </div>
    </div>
  ) : status === "failed" ? (
    <div className="h-[172px] w-full flex flex-row items-center shadow-md justify-between bg-[#DBC2BD] rounded-[86px] mt-4 px-8">
      <div className="bg-[#F4F4F4] border-[#707070] rounded-[64px] border ml-4 w-[128px] h-[128px]"></div>
      <div className="flex flex-col flex-1 px-3">
        <div className="text-lg text-[#373633] font-bold">
          Well tried but you need to get better at this.
        </div>
        <div className="text-2xl text-[#373633] font-extrabold">
          Sorry! you failed at this task.
        </div>
        <div className="text-lg text-[#000000] font-light">
          You need to work on the code optimization and use less console logs in
          home.js file.
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[172px] w-full flex flex-row items-center shadow-md justify-between bg-[#9FC8A7] rounded-[86px] mt-4 px-8">
      <div className="bg-[#F4F4F4] border-[#707070] rounded-[64px] border ml-4 w-[128px] h-[128px]"></div>
      <div className="flex flex-col flex-1 px-3">
        <div className="text-lg text-[#373633] font-bold">
          Heyy, you're good at this.
        </div>
        <div className="text-2xl text-[#000000] font-extrabold">
          Congrats! You won this badge.
        </div>
        <div className="text-lg text-[#373633] font-light">
          The badge has been added in your profile & resume. Download it.
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button
          onClick={onClick}
          className={`btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000]  border-none bg-[#FFD17B] hover:bg-[#FFD17B] hover:border-[#FFD17B]`}
        >
          <span className="font-extrabold">SHARE BADGE</span>
        </button>
      </div>
    </div>
  );
};

export default TaskProgress;
