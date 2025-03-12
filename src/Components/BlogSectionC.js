import React from "react";
import BlogGridItem from "./BlogGridItem";

function BlogSection() {
  return (
    <div className="md:mx-20 text-center md:py-2 border-b mx-6 px-4 py-8">
      <h1 className="font-bold text-2xl md:text-[40px] mb-2">
        Recent Updates & <span className="text-[#FC9713]">Blog Post</span>
      </h1>
      <h2 className="md:mx-60 hidden md:inline-block text-[#000000B3] md:text-[20px] md:mb-[20px]">
        We bring you the latest trends and expert opinions all in one place, helping you stay ahead and make informed decisions.
      </h2>

      <div className="grid grid-cols-1 md:flex md:items-center md:justify-evenly gap-x-12 mt-10 mb-0 pb-0 gap-[40px]">
        <BlogGridItem
          icon="/bg-01.png"
          heading="Trends and innovation in best Construction"
          description="Building components are constructed offsite and then assembled onsite,reducing construction"
        />
        <BlogGridItem
          icon="/bg-02.png"
          heading="Stories of Construction Our world Creativity"
          description="The creative process in architecture involves blend of engineering aesthetic,and environmental"
        />
        <BlogGridItem
          icon="/bg-03.png"
          heading="Innovative trends transform Construction"
          description="Theconstruction of philosophical System like Immanuel kants critique of pure resonor japan "
        />
      </div>
      <a href="/blog">
      <button className="bg-[#FC9713] text-black px-6 py-2 rounded-md mt-10 cursor-pointer md:my-[50px] md:mt-[80px] md:h-[50px] md:w-[240px] md:font-bold md:text-[20px]">
        More Articles
      </button>
      </a>
    </div>
  );
}

export default BlogSection;
