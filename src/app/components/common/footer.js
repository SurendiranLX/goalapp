import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#000000]  w-full min-h-[200px] flex flex-col items-center">
      <div className="max-w-screen-xl flex flex-col w-full bg-[#000000] py-16">
        <div className="flex justify-between">
          <div className="flex flex-col flex-1 mr-16">
            <div className="text-7xl font-extrabold text-white [&>span]:block">
              Let’s <span>Connect.</span>
            </div>
            <div className="text-base mt-1 font-normal text-[#878787]">
              Reach out to us, if you have more questions regarding I GOT
              SKILLS.
            </div>
            <div className="flex mt-12">
              <input
                type="text"
                placeholder="Email address"
                class="input rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none bg-[#fff] focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
              />
              <button className="btn relative h-[48px] min-w-[138px] rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none text-[#000] bg-[#FFD17B] border-none mr-[32px] hover:bg-[#FFD17B] hover:border-[#FFD17B]">
                <span className="font-extrabold">Subscribe</span>
              </button>
            </div>
          </div>
          <div className="flex-[1.5]">
            <div className="flex">
              <div className="w-44">
                <div className="text-white text-xl font-extrabold">Skills</div>
                <ul className="font-light list-disc ml-4 [&>li]:text-[#B6BDB9] [&>li]:my-2 text-lg">
                  <li>React Native</li>
                  <li>NodeJS</li>
                  <li>Python</li>
                  <li>OpenAI</li>
                </ul>
              </div>
              <div className="w-44">
                <div className="text-white text-xl font-extrabold">Links</div>
                <ul className="font-light list-disc ml-4 [&>li]:text-[#B6BDB9] [&>li]:my-2 text-lg">
                  <li>Jobs</li>
                  <li>Support</li>
                  <li>Clients</li>
                </ul>
              </div>
            </div>
            <div className="h-[1px] bg-[#313131] mt-5 mb-8"></div>
            <div className="flex">
              <div className="flex items-center mr-16">
                <div className="w-20 h-20 rounded-[40px] bg-[#262626] mr-4"></div>
                <div>
                  <div className="text-white text-xl font-extrabold">Phone</div>
                  <div className="font-light text-[#B6BDB9] text-lg">
                    91-912346788
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-[40px] bg-[#262626] mr-4"></div>
                <div>
                  <div className="text-white text-xl font-extrabold">Email</div>
                  <div className="font-light text-[#B6BDB9] text-lg">
                    hello@igotskills.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm mt-1 font-normal text-[#B6BDB9] text-center my-2">
        © copyright 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
