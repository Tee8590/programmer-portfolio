// import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import React from "react";
// import Tilt from "react-tilt";
import TiltWrapper from "./TiltWrapper";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// import Icon from '@mdi/react';
// import { mdiArrowDownBold } from '@mdi/js';


const ProjectCard = ({
  index,
  name,
  date,
  points,
  description,
  tags,
  image,
  video,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <TiltWrapper
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[980px] w-full'
      >
        <div className='relative w-full h-[580px]'>
          {/* {iframe start} */}
          <div className=" absolute inset-0 z-10 relative w-full h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.split("/embed/")[1].split("?")[0]}`, "_blank")}
          >
            {video ? (
              <iframe
                width="100%"
                height="100%"
                src={`${video}&autoplay=1&mute=1`} // Added autoplay and mute
                title={name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                muted // Ensures autoplay works smoothly
                className="rounded-2xl  pointer-events-none"
              ></iframe>
            ) : (
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 ' >
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <div className=' flex flex-wrap gap-1'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                {tag.name}
              </p>
            ))}
          </div>
         
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-2 text-secondary text-[14px]'>{points}</p>
          {/* <div className='relative w-full h-[360px]'>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />

            </div> */}

        </div>


      </TiltWrapper >
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* <div className="flex gap-2">
            <a href="#about">
              <button className="px-3 py-1 text-sm font-medium bg-black-100 text-white rounded-lg flex items-center gap-1">
                <Icon path={mdiArrowDownBold} size={1} /> Resume
              </button>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <button className="px-3 py-1 text-sm font-medium bg-black-100 text-white rounded-lg flex items-center gap-1">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" /> LinkedIn
              </button>
            </a>
            <a href="mailto:your.email@example.com">
              <button className="px-3 py-1 text-sm font-medium bg-black-100 text-white rounded-lg flex items-center gap-1">
                <img src={EmailIcon} alt="Email" className="w-5 h-5" /> Email
              </button>
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <button className="px-3 py-1 text-sm font-medium bg-black-100 text-white rounded-lg flex items-center gap-1">
                <img src={GitHubIcon} alt="GitHub" className="w-5 h-5" /> GitHub
              </button>
            </a>
          </div> */}
        </motion.div>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${project.name.replace(/\s+/g, "-")}-${index}`} index={index} {...project} />
        ))} */}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
