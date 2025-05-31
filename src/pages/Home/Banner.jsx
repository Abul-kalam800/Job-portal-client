import React from "react";
import banner1 from "/src/assets/banner/developer_team1.jpg";
import banner2 from "/src/assets/banner/developer_team2.jpg";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-11/12 mx-auto h-screen lg:flex-row flex-col">
      <div className="max-w-xl">
        <h1 className="text-6xl font-semibold mb-5 ">
          The{" "}
          <motion.span
            animate={{
              color: ["#5bff33", "#33e3ff", "#333fff"],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            Easiest Way{" "}
          </motion.span>
          to Get Your New Job{" "}
        </h1>
        <p>
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
      </div>
      <div className="max-w-lg">
        <div className="max-w-sm ">
          <motion.img
            animate={{ y: [50, 120,50] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="border-b-6 border-l-8 border-blue-500 rounded-t-4xl rounded-br-4xl"
            src={banner1}
            alt=""
          />
        </div>
          <motion.img
         
            animate={{ x: [50, 120,50] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="max-w-sm border-b-6 border-l-8 border-blue-500 rounded-t-4xl rounded-br-4xl"
            src={banner2}
            alt=""
          />
      </div>
    </div>
  );
};

export default Banner;
