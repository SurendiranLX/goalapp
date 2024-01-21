import Image from "next/image";

export default function EditProfile() {
  return (
    <div className="flex flex-col justify-center w-full max-w-screen-xl mt-6 mb-12">
      <h1 className="font-extrabold text-5xl mt-6 mb-2">Edit Profile</h1>
      {/* About you */}
      <div className="w-full flex flex-col items-start justify-between bg-white relative shadow-md rounded-xl mt-4 pl-8 pr-16 py-6">
        <div className="flex flex-row items-center flex-1 mb-8">
          <Image
            src="/about.svg"
            alt=""
            width={36}
            height={36}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="font-bold text-lg ml-2">About you</div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-row items-start flex-1">
            <Image
              src="/react.jpg"
              alt=""
              width={170}
              height={170}
              className="rounded-[85px] mr-4"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className="flex flex-col">
              <div className="text-md font-bold text-[#373633] mb-4">
                Add your picture
              </div>
              <button className="btn relative h-[28px] min-w-[138px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
                <span className="font-extrabold">DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-md font-bold text-[#373633] mb-4">
              Username
            </div>
            <input
              type="text"
              placeholder="Type username"
              class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-md font-bold text-[#373633] mb-4">
              Your Full name
            </div>
            <input
              type="text"
              placeholder="Enter full name"
              class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex w-full flex-col mt-8">
          <div className="flex flex-col flex-1">
            <div className="text-md font-bold text-[#373633] mb-4">
              Mobile Number
            </div>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex w-full flex-col mt-8">
          <div className="text-md font-bold text-[#373633] mb-4">About you</div>
          <textarea
            placeholder="Bio"
            class="textarea textarea-bordered textarea-md w-4/6"
          ></textarea>
        </div>
      </div>
      {/* Experience */}
      <div className="w-full mt-10 shadow-md rounded-xl bg-white">
        <div className="w-full flex flex-col items-start justify-between relative pl-8 pr-16 py-6">
          <div className="flex flex-row items-center flex-1 mb-8">
            <Image
              src="/experience.svg"
              alt=""
              width={36}
              height={36}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className="font-bold text-lg ml-2">Experience</div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-5/12">
              <div className="text-md font-bold text-[#373633] mb-4">
                Company name
              </div>
              <input
                type="text"
                placeholder="Enter Company name"
                class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col w-7/12">
              <div className="text-md font-bold text-[#373633] mb-4">
                Your role
              </div>
              <input
                type="text"
                placeholder="Enter your role"
                class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex w-full mt-10">
            <div className="flex flex-col w-5/12">
              <div className="text-md font-bold text-[#373633] mb-4">From</div>
              <div className="flex flex-row max-w-[300px]">
                <select className="select select-bordered w-full max-w-xs rounded-[48px] mr-5">
                  <option disabled selected>
                    Month
                  </option>
                  <option>Jan</option>
                  <option>Feb</option>
                </select>
                <select className="select select-bordered w-full rounded-[48px] max-w-xs">
                  <option disabled selected>
                    Year
                  </option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-7/12">
              <div className="text-md font-bold text-[#373633] mb-4">To</div>
              <div className="flex flex-row">
                <div className="max-w-[300px] min-w-[290px] flex flex-row">
                  <select className="select select-bordered w-full rounded-[48px] mr-5">
                    <option disabled selected>
                      Month
                    </option>
                    <option>Jan</option>
                    <option>Feb</option>
                  </select>
                  <select className="select select-bordered w-full rounded-[48px] max-w-xs">
                    <option disabled selected>
                      Year
                    </option>
                    <option>2018</option>
                    <option>2019</option>
                  </select>
                </div>
                <div class="form-control ml-6">
                  <label class="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked="checked"
                      class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text">Till Now</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider mb-0"></div>
        <div className="w-full px-8 py-8">
          <button className="btn relative h-[28px] min-w-[168px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
            <span className="font-extrabold">Add Another</span>
          </button>
        </div>
      </div>
      {/* Education (Graduate) */}
      <div className="w-full mt-10 shadow-md rounded-xl bg-white">
        <div className="w-full flex flex-col items-start justify-between relative pl-8 pr-16 py-6">
          <div className="flex flex-row items-center flex-1 mb-8">
            <Image
              src="/education.svg"
              alt=""
              width={36}
              height={36}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className="font-bold text-lg ml-2">Education (Graduate)</div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-5/12">
              <div className="text-md font-bold text-[#373633] mb-4">
                Institution name
              </div>
              <input
                type="text"
                placeholder="Enter Institution name"
                class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col w-7/12">
              <div className="text-md font-bold text-[#373633] mb-4">
                Studied in
              </div>
              <input
                type="text"
                placeholder="Enter Studied in"
                class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex w-full mt-10">
            <div className="flex flex-col w-5/12">
              <div className="text-md font-bold text-[#373633] mb-4">From</div>
              <div className="flex flex-row max-w-[300px]">
                <select className="select select-bordered w-full max-w-xs rounded-[48px] mr-5">
                  <option disabled selected>
                    Month
                  </option>
                  <option>Jan</option>
                  <option>Feb</option>
                </select>
                <select className="select select-bordered w-full rounded-[48px] max-w-xs">
                  <option disabled selected>
                    Year
                  </option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-7/12">
              <div className="text-md font-bold text-[#373633] mb-4">To</div>
              <div className="flex flex-row">
                <div className="max-w-[300px] min-w-[290px] flex flex-row">
                  <select className="select select-bordered w-full rounded-[48px] mr-5">
                    <option disabled selected>
                      Month
                    </option>
                    <option>Jan</option>
                    <option>Feb</option>
                  </select>
                  <select className="select select-bordered w-full rounded-[48px] max-w-xs">
                    <option disabled selected>
                      Year
                    </option>
                    <option>2018</option>
                    <option>2019</option>
                  </select>
                </div>
                <div class="form-control ml-6">
                  <label class="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked="checked"
                      class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text">Till Now</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider mb-0"></div>
        <div className="w-full px-8 py-8">
          <button className="btn relative h-[28px] min-w-[168px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
            <span className="font-extrabold">Add Another</span>
          </button>
        </div>
      </div>
      <div className=" mt-8 w-full justify-end items-end flex">
        <button className="btn mr-6 relative h-[28px] min-w-[168px] rounded-[16px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
          <span className="font-extrabold">CANCEL</span>
        </button>
        <button className="btn relative h-[48px] min-w-[168px] rounded-[16px] text-[#000] bg-[#FFD17B] border-none hover:bg-[#FFD17B] hover:border-[#FFD17B]">
          <span className="font-extrabold">SAVE CHANGES</span>
        </button>
      </div>
    </div>
  );
}
