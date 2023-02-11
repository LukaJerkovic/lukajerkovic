import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      <h2 className="flex sm:text-3xl text-2xl pt-32 text-center text-gray-600">
        <TypeAnimation
          sequence={[
            'No experience as a Web Developer yet.',
            2000,
            ' But with hard work and dedication that will change soon...',
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2rem', paddingLeft: '5px' }}
        />
      </h2>
    </div>
  );
};

export default Work;
