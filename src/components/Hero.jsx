import { motion } from "framer-motion";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain rounded-full" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* Hi, I'm  */}
            <span className='text-[#915EFF]'>Tom Godsalo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            GAMEPLAY PROGRAMMER <br className='text-pink-400 sm:block hidden' />
            {/* interfaces and web applications */}
          </p>
          {/* <div className="flex space-x-4">
            <a href="https://linkedin.com" className="text-pink-400">LinkedIn</a>
            <a href="https://github.com" className="text-pink-400">GitHub</a>
            <button className="bg-teal-500 px-4 py-2 rounded">Resume</button>
          </div> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
