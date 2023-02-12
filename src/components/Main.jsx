import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div>
      <div id="main">
        <img
          className="w-full h-screen object-cover"
          src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="main"
        />
        <div className="w-full h-screen absolute top-0 left-0">
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-600">
              I'm Luka Jerković
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-600">
              I'm a
              <TypeAnimation
                sequence={[
                  'Developer',
                  1000, // Waits 1s
                  'Tech Enthusiast',
                  2000, // Waits 2s
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2rem', paddingLeft: '5px' }}
              />
            </h2>
            <div className="flex justify-center pt-6 max-w-[200px] w-full">
              <a href="https://www.linkedin.com/in/luka-jerković">
                <FaLinkedin className="cursor-pointer" size={30} src="" />
              </a>
              <a href="https://github.com/LukaJerkovic;">
                <FaGithub className="cursor-pointer" size={30} src="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
