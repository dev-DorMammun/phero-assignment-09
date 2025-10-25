import React from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router";
import Card from "./Card";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col gap-5 md:gap-20">
      <title>SkillCircle - Home</title>
      <Hero />
      <div className="space-y-5">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-gray-700">
          Offered Courses
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((skill) => (
            <Card skill={skill} key={skill.skillId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
