import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
	<>
	<Navbar/>
    <div className="min-h-screen flex flex-col justify-center items-center overflow-auto">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <img src='/background.jpg' alt="About us" className="w-full rounded-lg mb-8" />
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor eleifend tellus, at commodo nisl fermentum sed. Donec dignissim auctor mauris a lobortis. Proin quis mauris sit amet risus maximus gravida quis in risus. Vivamus quis libero ut ipsum malesuada vestibulum non nec libero. Donec sed risus vitae tortor mattis bibendum. Pellentesque in est in elit pretium interdum ac vel massa. Donec vestibulum enim eu blandit pulvinar. Vivamus eget justo sed augue dignissim interdum eu ut velit. Sed ut lorem et libero feugiat consectetur. In auctor neque sed faucibus interdum. Praesent pharetra lacus a tortor aliquam eleifend. Nam maximus tincidunt augue, eget aliquam arcu ultrices a.
        </p>
      </div>
    </div>
	</>
  );
};

export default About;
