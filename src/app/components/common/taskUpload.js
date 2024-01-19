import React, { forwardRef } from "react";
import Image from "next/image";

const TaskUpload = forwardRef(({ status, ...props }, ref)=> {
  const closeModal = () => {
    ref.current.close();
  };
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box overflow-visible max-w-[700px] bg-[#F9F6F0] relative rounded-[50px]">
        <div className="flex items-center mb-8">
          <Image
            src="/hand_pink.svg"
            alt=""
            width={100}
            height={100}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg tetx-bold">Submit task for</h3>
            <div>Gyro based 3D Card in React app using Reanimated 2</div>
          </div>
        </div>
        {status === true ? (
          <>
            <div className="py-4">
              <div className="flex w-full justify-between">
                <div className="flex flex-col w-4/12">
                  <div className="text-md font-bold text-[#373633] mb-4">
                    Project in Zip file
                  </div>
                  <button className="btn relative h-[28px] min-w-[128px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
                    <span className="font-extrabold">Upload File</span>
                  </button>
                </div>
                <div className="flex flex-col w-7/12">
                  <div className="text-md font-bold text-[#373633] mb-4">
                    Enter Project URL(GitHub, Google drive, etc.)
                  </div>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between mt-8">
                <div className="flex flex-col w-4/12">
                  <div className="text-md font-bold text-[#373633] mb-4">
                    Project in Zip file
                  </div>
                  <button className="btn relative h-[28px] min-w-[128px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
                    <span className="font-extrabold">Upload File</span>
                  </button>
                </div>
                <div className="flex flex-col w-7/12">
                  <div className="text-md font-bold text-[#373633] mb-4">
                    Enter Project URL(GitHub, Google drive, etc.)
                  </div>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000] bg-[#FFD17B] border-none hover:bg-[#FFD17B] hover:border-[#FFD17B]">
                <span className="font-extrabold">SUBMIT TASK</span>
              </button>
            </div>
          </>
        ) : (
          <div className="w-full justify-center">
            <div className="font-bold text-lg text-center">Your task has been successfully submitted.</div>
            <div className="modal-action flex justify-center">
              <button onClick={closeModal} className="btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000] bg-[#FFD17B] border-none hover:bg-[#FFD17B] hover:border-[#FFD17B]">
                <span className="font-extrabold">OKAY</span>
              </button>
            </div>
          </div>
        )}
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-[#FFFFFF] absolute -right-4 font-extrabold -top-4"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
});

export default TaskUpload;
