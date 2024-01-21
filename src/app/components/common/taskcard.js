import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const TaskCard = ({ taskKey, image, title, tags }) => {
  return (
    <Link href="/taskdetail">
      <div
        key={taskKey}
        className="w-[270px] h-[270px] flex-shrink-0 inline-block float-left rounded-[24px] relative overflow-x-scroll mr-4"
      >
        {/* Task Image */}
        <Image
          src={image}
          alt={title}
          size={270}
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <div className="bg-[#000]/40 backdrop-blur-md absolute bottom-0 w-full px-3 py-2 rounded-t-[24px]">
          {/* Task Title */}
          <div className="text-sm font-bold text-white leading-4">{title}</div>
          <div className="text-xs font-bold mt-2 text-white">
            By Swng Pvt. Ltd.
          </div>
          {/* Task Tags */}
          <div className="flex flex-row mt-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="text-sm min-w-[80px] justify-center flex items-center px-2 h-[24px] border-[0.5px] border-[#fff] rounded-[24px] mr-2 text-white"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

TaskCard.propTypes = {
  taskKey: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskCard;
