import {textVariant} from "../utils/motion"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {motion} from "framer-motion"
import { styles } from "../styles";
const Tech = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-20`}>
          Technology
        </h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
   </>

  );
};

export default SectionWrapper(Tech, "tech");