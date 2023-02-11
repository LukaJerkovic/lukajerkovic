import React from 'react';
import ProjectItem from './ProjectItem';
import BankImg from '../assets/Fictional bank website.png';
import GptImg from '../assets/gpt-3.png';
import MetaImg from '../assets/Metaversus.png';
import RestImg from '../assets/Restaurant website.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="flex flex-wrap gap-4 flex-row items-center py-8 justify-start text-sm md:text-lg">
        I am proud of the work I have produced and am excited to share some of
        my favorite projects with you. From building simple, yet effective
        landing pages to complex web applications, I am passionate about
        delivering high-quality, user-friendly websites that not only look great
        but also function seamlessly. Through each project, I have honed my
        skills and expanded my knowledge in web development, and I am constantly
        striving to improve and deliver the best results for my clients. So,
        take a look, and let me know what you think. I'd love to hear your
        feedback.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={BankImg}
          title="Bank app"
          src="https://lukajerkovic.github.io/bank_modern_app/"
        />
        <ProjectItem
          img={GptImg}
          title="GPT-3"
          src="https://lukajerkovic.github.io/gpt3_luka/"
        />
        <ProjectItem
          img={MetaImg}
          title="Metaversus"
          src="https://metaversus-4xprlpag8-lukajerkovic.vercel.app/"
        />
        <ProjectItem img={RestImg} title="Restaurant website"src='https://lukajerkovic.github.io/restaurantwebsite/'/>
      </div>
    </div>
  );
};

export default Projects;
