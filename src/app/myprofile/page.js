import Image from "next/image";
import Link from "next/link";
export default function MyProfile() {
  const items = Array.from({ length: 4 }, (_, index) => index + 1);
  const items2 = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col justify-center w-full max-w-screen-xl mt-6 mb-12">
      {/* Short bio */}
      <div className="w-full flex flex-row items-start justify-between bg-white relative shadow-md rounded-[116px] mt-4 pl-8 pr-16 py-6">
        <div className="flex">
          <div className="w-[170px] h-[170px] flex justify-center relative rounded-[85px] border border-[#707070] flex-shrink-0">
            <Image
              src="/react.jpg"
              alt=""
              width={170}
              height={170}
              className="rounded-[85px]"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div class="badge badge-neutral absolute bottom-2">
              IGS Rank: 42,344
            </div>
          </div>
          <div className="flex flex-col ml-4 mr-4">
            <div className="font-extrabold text-5xl">@muggi.m</div>
            <div className="font-bold text-3xl mt-1">Mugesh Murugan</div>
            <div className="text-base mt-6">CTO, AlterX Private Limited.</div>
            <div className="absolute grid grid-cols-3 grid-rows-1 gap-x-4 h-[62px] w-[200px] -bottom-7">
              <div className="w-[62px] flex bg-white h-[62px] rounded-[31px] border-[#707070] border justify-center items-center">
                <Image
                  src="/phone.svg"
                  alt=""
                  width={30}
                  height={30}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="w-[62px] h-[62px] bg-white flex rounded-[31px] border-[#707070] border justify-center items-center">
                <Image
                  src="/email.svg"
                  alt=""
                  width={30}
                  height={30}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="w-[62px] h-[62px] bg-white flex rounded-[31px] border-[#707070] border justify-center items-center">
                <Image
                  src="/share.svg"
                  alt=""
                  width={30}
                  height={30}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-2 w-[400px]">
          <div className="text-sm font-bold">About me</div>
          <div className="text-lg text-[#373633]">
            A new age developer looking for a well positioned role in a
            reputable organization to show off my skills in NodeJS, OpenAI,
            MySQL, GraphQL, React Native. Contact me to know more about me.
          </div>
        </div>
        <div className="flex flex-col mr-4">
          <div className="font-bold text-sm">Completed Tasks</div>
          <div className="text-4xl font-extrabold">46</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm">Badges Earned</div>
          <div className="text-4xl font-extrabold">8</div>
        </div>
        <div className="absolute flex right-0 -bottom-5 items-center mr-16">
          <div className="w-[280px] h-[35px] bg-white border mr-4 border-[#D8D8D8] shadow-md rounded-[17.5px]">
            <div className="bg-[#7ED592] h-[35px] w-16 text-[#373633] flex items-center rounded-[17.5px] text-md">
              <span className="inline-block ml-4">68%</span>
            </div>
          </div>
          <Link href="/editprofile">
            <button className="btn relative h-[28px] min-w-[138px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
              <span className="font-extrabold">EDIT PROFILE</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Download Resume */}
      <div className="flex flex-row bg-[#A2D9E1] shadow-md flex-[2.5] mt-14 items-center py-8 rounded-md p-4">
        <div className="flex-1">
          <div className="text-md text-[#21262C] font-bold">
            Get your resume for FREE to show off your earned skills for more
            credibility.
          </div>
          <div className="text-sm text-[#21262C]">
            Update your latest info in your profile.
          </div>
        </div>
        <button className="btn relative h-[28px] min-w-[138px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
          <span className="font-extrabold">DOWNLOAD RESUME</span>
        </button>
      </div>

      {/* Personal Detail */}
      <div className="flex mt-12 items-start">
        <div className="flex flex-col bg-white shadow-md flex-[2.5] mr-12 rounded-md p-4">
          <div className="flex w-full">
            <div className="flex flex-row items-center flex-1">
              <Image
                src="/badge.svg"
                alt=""
                width={36}
                height={36}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className="font-bold text-lg ml-2">Earned Badges (8)</div>
            </div>
            <button className="btn relative h-[48px] min-w-[138px] rounded-[24px] text-[#000] bg-[#fff] border-[#1A1A1A] hover:bg-[#fff] hover:border-[#1A1A1A]">
              <span className="font-extrabold">GET MORE</span>
            </button>
          </div>
          <div className="mt-6 mb-8">
            <div className="text-md text-[#373633] font-bold mb-4">
              Skill Badges
            </div>
            <div className="flex flex-wrap">
              {items.map((item) => (
                <div className="min-w-[175] flex flex-col mb-12 items-center mx-4 justify-center">
                  <Image
                    src="/react.jpg"
                    alt=""
                    width={175}
                    height={175}
                    className="rounded-[87.5px]"
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <div className="text-md text-[#373633] font-bold">
                    Verified
                  </div>
                  <div className="text-sm text-[#373633]">
                    Verified by IGS team
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <div className="text-md text-[#373633] font-bold mb-4">
              Knowledge Badges
            </div>
            <div className="flex flex-wrap">
              {items2.map((item) => (
                <div className="min-w-[175] flex flex-col mb-12 items-center mx-4 justify-center">
                  <Image
                    src="/react.jpg"
                    alt=""
                    width={175}
                    height={175}
                    className="rounded-[87.5px]"
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <div className="text-md text-[#373633] font-bold">
                    Verified
                  </div>
                  <div className="text-sm text-[#373633]">
                    Verified by IGS team
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col bg-white shadow-md w-full min-h-20 rounded-md p-4">
            <div className="flex flex-row items-center">
              <Image
                src="/experience.svg"
                alt=""
                width={36}
                height={36}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className="font-bold text-lg ml-2">
                Experience(4 years & 3 months)
              </div>
            </div>
            <div className="flex flex-row justify-between my-8">
              <div className="flex flex-col flex-1">
                <div className="font-bold text-[#373633] text-md">
                  AlterX Pvt. Ltd.
                </div>
                <div className="text-[#373633] text-sm">CTO</div>
              </div>
              <div className="font-bold text-[#37363360] text-md">
                May 2019- Present
              </div>
            </div>
          </div>
          <div className="flex bg-white shadow-md w-full mt-10 min-h-20 rounded-md p-4">
            <div className="flex flex-row items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
