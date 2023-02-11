import React from 'react';
import Profile from '../assets/Profile.jpg';

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        About me
      </h1>
      <img
        src={Profile}
        className='mx-auto w-72 h object-center rounded-xl py-8'
      />
      <p className="flex flex-wrap gap-4 flex-row items-center py-8 justify-start text-sm md:text-lg">
        Hi there! My name is Luka, and I am a Junior Web Developer. I have a
        strong passion for creating and developing websites that are not only
        aesthetically pleasing but also user-friendly and functional. I have a
        strong understanding of the technologies used in web development and
        have honed my skills in HTML, CSS, and JavaScript. I am constantly
        seeking opportunities to improve my skills and keep up with the latest
        developments in the field. I have completed several projects that have
        allowed me to apply my knowledge and create dynamic and interactive
        websites. I am a quick learner, have a strong attention to detail, and
        am committed to producing high-quality work. In addition to my technical
        skills, I also have excellent communication and problem-solving skills.
        I am a team player and enjoy collaborating with others to find
        innovative solutions to complex problems. I am eager to take on new
        challenges and contribute my skills to a company where I can continue to
        grow and develop as a web developer. I am confident that my combination
        of technical and interpersonal skills make me a strong candidate for any
        web development position. I look forward to the opportunity to bring my
        passion and expertise to your team.
      </p>
    </div>
  );
};

export default About;
