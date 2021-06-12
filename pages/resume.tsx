import Bar from "../components/Bar";
import { languages, tools } from "../data";

import { motion } from "framer-motion";
import { fadeInUp, routerAnimation } from "../animations";

const Resume = () => {

  return (
    <motion.div className="px-6 py-2" variants={routerAnimation} initial="initial" animate="animate" exit="exit">
      {/* //! Educação & Experiência */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">
            Educação
          </h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Analista de Sistemas
            </h5>
            <p className="font-semibold">
              Universidade Federal da Paraíba (2015-2021)
            </p>
            <p className="my-3">
              Atualmente estou estudante de sistema de informação
              na Universidade Federal da Paraíba. 
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">
            Experiência
          </h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Desenvolvedor de software
            </h5>
            <p className="font-semibold">
              Serviços de consultoria
            </p>
            <p className="my-3">
              Trabalho de freelance
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
