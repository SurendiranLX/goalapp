import React, { forwardRef } from "react";
import Image from "next/image";

const Login = forwardRef(({ status, ...props }, ref) => {
  const closeModal = () => {
    ref.current.close();
  };
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box overflow-visible max-w-[600px] bg-[#F9F6F0] relative rounded-[50px]">
        <div className="flex flex-row">
          <Image
            src="/login-image.png"
            alt=""
            width={273}
            height={273}
            style={{objectFit:"contain"}}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="flex flex-col ml-4 mb-8">
            <Image
              src="/two_hand.svg"
              alt=""
              width={100}
              height={100}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className="ml-4">
              <h3 className="font-bold text-2xl tetx-bold">
                Ready to show your skills?
              </h3>
              <div>Login/Signup with just 1 click below.</div>
              <button
                className="btn my-4 relative h-[48px] px-8 min-w-[158px] rounded-[48px] text-[#fff] bg-[#000000] hover:bg-[#000000]"
              >
                <Image
                  src="/google_icon.svg"
                  alt="login"
                  width={28}
                  height={28}
                  className=""
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <span className="font-bold text-white">ENTER WITH GOOGLE</span>
              </button>
              <div className="text-xs font-light">
                By creating an account you agree with our Terms of Service,
                Privacy Policy
              </div>
            </div>
          </div>
        </div>

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

export default Login;
