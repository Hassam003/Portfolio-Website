import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const aboutData = [
  {
    key: 0,
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={Math.random()} />,
          <FaCss3 key={Math.random()} />,
          <FaJs key={Math.random()} />,
          <FaReact key={Math.random()} />,
          <SiNextdotjs key={Math.random()} />,
          <SiFramer key={Math.random()} />,
          <FaWordpress key={Math.random()} />,
        ],
      },
      {
        title: 'UI / UX Design',
        icons: [
          <FaFigma key={Math.random()} />,
          <SiAdobexd key={Math.random()} />,
          <SiAdobephotoshop key={Math.random()} />,
        ],
      },
    ],
  },
  {
    key: 1,
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2018 - 2019',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    key: 2,
    title: 'experience',
    info: [
      {
        title: 'React Developer - Terraform Technologies',
        stage: '2023 - Present',
      },
      {
        title: 'React Developer Intern - Prosigns',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    key: 3,
    title: 'credentials',
    info: [
      {
        title: 'Certified React Developer - Udemy',
        stage: '2023',
      },
      {
        title: 'BSCS - GCU, Lahore, Pakistan',
        stage: '2018 - 2022',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <>
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[265px] h-[500px]'
        >
          <Avatar />
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* Text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'
            >
              Captivating <span className='text-accent'>stories</span> birth
              magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            >
              2 years ago, I began working as a developer. Since then I have
              done remote work for agencies, consulted for startups, and
              collaborated on digital products for business and consumer use.
            </motion.p>
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of experience
                  </div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={250} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied Clients
                  </div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={650} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished Projects
                  </div>
                </div>
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Winning Awards
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      'text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item) => {
                return (
                  <div
                    key={Math.random()}
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  >
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon) => {
                        return (
                          <div
                            className='text-2xl text-white'
                            key={Math.random()}
                          >
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
