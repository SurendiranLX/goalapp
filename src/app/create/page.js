import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import photo1 from "../../../public/photo1.jpg";
import photo2 from "../../../public/photo2.jpg";
import photo3 from "../../../public/photo3.jpg";
import photo4 from "../../../public/photo4.jpg";

const imageUrl =
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

export default function Dashboard() {
    const items = Array.from({ length: 10 }, (_, index) => index + 1);
    return (
        <div className="w-full h-[100vh] relative">
            {/* Header */}
            <div className="flex flex-row items-center h-[80px] bg-[#ffffff20] px-[16px] w-full">
                <div className="font-bold text-lg ml-2 text-white">Create Goal</div>
            </div>
            {/* List */}
            <div className="flex flex-col px-[16px] mt-6 relative">
                <div className="text-md text-white tracking-wider font-semibold">Name</div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter the Goal Name"
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="text-md text-white tracking-wider font-semibold mt-6">
                    Description
                </div>
                <div>
                    <textarea
                        className="textarea textarea-primary w-full"
                        placeholder="Enter the Description"
                    ></textarea>
                </div>
                <div className="text-md text-white tracking-wider font-semibold mt-6">
                    Choose category
                </div>
                <div>
                    <select className="select select-primary w-full">
                        <option disabled selected>Choose any one</option>
                        <option>Food</option>
                        <option>Music</option>
                        <option>Book</option>
                        <option>Sports</option>
                        <option>Fitness</option>
                    </select>
                </div>
                <div className="text-md text-white tracking-wider font-semibold mt-6">
                    Progress BreakUp
                </div>
                <div className="flex flex-row justify-between mt-2">
                    <div className="w-[60%]">
                        <div className="text-sm text-[#ffffff]">Description</div>
                        <textarea
                            className="textarea textarea-primary w-full"
                            placeholder=""
                        ></textarea>
                    </div>
                    <div className="w-[30%]">
                        <div className="text-sm text-[#ffffff]">Percentage%</div>
                        <input
                            type="text"
                            placeholder=""
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute w-full flex justify-center bottom-0">
                <Link href="/goaldetail">
                    <button className="btn btn-success w-[100vw] max-w-[400px] rounded-none text-white justify-center">
                        CREATE
                    </button>
                </Link>
            </div>
        </div>
    );
}
