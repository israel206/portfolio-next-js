import { motion } from "framer-motion";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { stagger,fadeInUp, routerAnimation } from "../animations";
import { services } from "../data";
import { Service } from "../types";

const About = ({endpoint}) => {
  // console.log(services);
  console.log(endpoint);

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium">
        Oi! Meu nome é Israel Pereira da Silva. Sou desenvolvedor FullStack e sou muito apaixonado e dedicado
        ao meu trabalho. Com 5 anos de experiência com projeto acadêmicos na academia como desenvolvedor FullStack, 
        adquiri as habilidades e conhecimentos necessários para tornar seu projeto um sucesso. 
        Gosto de todas as etapas do processo de desenvolvimento, Planejamento, design, codificação, teste e execução adiante...
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          O que estou fazendo
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {/* a propriedade inicial e animada dos filhos deve ser igual à do pai durante um efeito de escalonamento  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async(
  context: GetServerSidePropsContext
) => {

  // console.log(process.env.VERCEL_URL);

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(data);
  return { props: { endpoint: process.env.VERCEL_URL } }
}

export default About;
