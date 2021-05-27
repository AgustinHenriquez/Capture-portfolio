import styled from "styled-components";
import { Link } from "react-router-dom";

import placares from "../img/placares.png";
import cocinas from "../img/cocinas.png";
import vanitory from "../img/vanitory.png";

import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation, lineAnimation, slider, sliderContainer } from "../animation";
import useScroll from "../components/useScroll"



const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff",}}>
      <Product>
        <motion.h2 variants={fade}>Cocinas</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnimation} src={cocinas} alt="cocinas"/>
          </Hide>

      </Product>
      <Product>
        <h2>Placares</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={placares} alt="theracer"/>
        </Link>
      </Product>
      <Product>
        <h2>Vanitory</h2>
        <div className="line"></div>
        <Link tp="/work/good-times">
          <img src={vanitory} alt="goodtimes"/>
        </Link>
      </Product>
    </Work>
   );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2{
    padding: 1rem 0rem;
  }
`
const Product = styled(motion.div)`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #09395A;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;

`

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff
`
const Frame4 = styled(Frame1)`
  background: #8effa0
`

 
export default OurWork;