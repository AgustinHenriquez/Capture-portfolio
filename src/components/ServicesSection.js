import home2 from "../img/home2.png"
import home4 from "../img/home4.jpg"

import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"

import { Layout, Description, Image } from "../styles";
import styled from "styled-components";

import useScroll from "./useScroll";
import {scrollReveal, fade} from  "../animation";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return ( 
    <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>Muebles para todo el hogar</h2>
        <Cards>
          <Card>
            <div className="icon">
              
              <h3>Cocinas</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              
              <h3>Rack TV</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              
              <h3>Placares</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              
              <h3>Escritorios</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
        <motion.button variants={fade}>Ver Más</motion.button>
      </Description>
      <Image>
        <img src={home4} alt="cocina"/>
      </Image>
    </Services>
   );
}

const Services = styled(Layout)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`


export default ServicesSection;