import home3 from "../img/home1.png"


import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

import { Layout, Description, Image, Hide } from "../styles";


const AboutSection = () => {
	return ( 
    <Layout>
      <Description>
        <motion.div className="title" >
					<Hide>
						<motion.h2 variants={titleAnimation} >Diseñamos a medida</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnimation}>productos de calidad</motion.h2>
					</Hide>
        </motion.div>
				<motion.p variants={fade}>Contactanos con tu idea para mejorar cualquier espacio de tu casa. Tenemos profesionales para ayudarte.</motion.p>
				<motion.button variants={fade}>Contactanos</motion.button>
      </Description>
			<Image>
				<motion.img src={home3} alt="cameraman" variants={photoAnimation}/>
			</Image>
    </Layout>
  );
}



 
export default AboutSection;