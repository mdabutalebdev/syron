import { useEffect, useState } from "react";
import HeroLeftCard from "../components/HeroLeftCard";
import HeroCardRight from "../components/HeroCardRight";

const Hero = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("HeroData.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="bg-[#F5F5FA] py-10">
      <div className="flex gap-20 container mx-auto">
        <div className="container mx-auto w-[65%]">
        {blogs.map((blog) => (
          <HeroLeftCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="w-[35%]">
        <HeroCardRight/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
