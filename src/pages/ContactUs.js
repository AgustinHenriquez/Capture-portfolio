import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from 'styled-components'
const ContactUs = () => {
  return ( 
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff",}}>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Contactanos</motion.h2>
        </Hide>
      </Title>
      <div>

      </div>
    </ContactStyle>
   );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`
const Hide = styled.div`
  overflow: hidden
`
const Social = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`
export default ContactUs;