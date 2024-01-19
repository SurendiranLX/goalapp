"use client";

import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import greenHand from "../../../../public/green_hand.svg";
import yellowHand from "../../../../public/yellow_hand.svg";
import Login from "./login";

const Header = () => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };
  return (
    <header className="flex w-full max-w-screen-xl py-4 z-[1]">
      <div className="w-[200px]">
        <Image
          src={logo}
          alt="igotskills"
          width={104}
          height={48}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className="w-[360px]">
          <input
            type="text"
            placeholder="🔎 Search for a skill"
            class="input rounded-[48px] bg-transparent focus:outline-none border-[#1A1A1A30] input-md w-full max-w-xs"
          />
        </div>
        <button className="btn relative h-[48px] min-w-[138px] rounded-[48px] text-[#1A1A1A] bg-transparent border-[#1A1A1A] mr-[32px] hover:bg-transparent hover:border-[#1A1A1A]">
          <Image
            src={greenHand}
            alt="contact"
            width={52}
            height={50}
            className="absolute left-[-16px]"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <span className="font-extrabold">CONTACT</span>
        </button>
        <div className="relative">
          <button
            className="btn relative h-[48px] min-w-[138px] border-transparent hover:border-transparent rounded-[48px] text-[#fff] bg-[#1A1A1A] hover:bg-[#1A1A1A]"
          >
            <Image
              src="/react.jpg"
              alt="user"
              width={34}
              height={34}
              className="rounded-[17px]"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <span className="font-extrabold">@muggi.m</span>
          </button>
          <div className="absolute bg-[#1A1A1A] w-[145.7px] h-[120px] -z-[1] top-6 rounded-b-[24px]">
            <ul className="flex items-end flex-col justify-end h-full mt-1">
              <li className="w-full py-4 flex px-4 border-t-[1px] border-t-[#707070] cursor-pointer">
                <Image
                  src="/about.svg"
                  alt="user" 
                  width={20}
                  height={20}
                  className="rounded-[17px] mr-2"
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className="text-md text-white">My Profile</div>
              </li>
              <li className="w-full pb-4 flex px-4 cursor-pointer">
                <Image
                  src="/logout.svg"
                  alt="logout"
                  width={20}
                  height={20}
                  className="rounded-[17px] mr-2"
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className="text-md text-white">Logout</div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={openModal}
          className="btn relative h-[48px] min-w-[138px] rounded-[48px] text-[#fff] bg-[#1A1A1A] hover:bg-[#1A1A1A]"
        >
          <Image
            src={yellowHand}
            alt="login"
            width={52}
            height={47}
            className="absolute left-[-16px]"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <span className="font-extrabold">LOGIN</span>
        </button>
        <Login ref={modalRef} />
      </div>
    </header>
  );
};

export default Header;
