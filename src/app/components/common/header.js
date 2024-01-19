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
    <header className="flex w-full max-w-screen-xl py-4">
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
        <button onClick={openModal} className="btn relative h-[48px] min-w-[138px] rounded-[48px] text-[#fff] bg-[#1A1A1A] hover:bg-[#1A1A1A]">
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
        <Login ref={modalRef}/>
      </div>
    </header>
  );
};

export default Header;
