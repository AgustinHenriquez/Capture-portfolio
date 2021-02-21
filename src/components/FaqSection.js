import styled from "styled-components";
import { Layout } from "../styles";
import { useState } from "react";
import Toggle from "../components/Toggle"
import { AnimateSharedLayout } from "framer-motion";

import useScroll from "./useScroll";
import {scrollReveal} from  "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return ( 
    <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur dolore accusamus, explicabo similique ut harum et neque optio reprehenderit.</p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
      </Toggle>
      <Toggle title="Different Payment Methods">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi delectus dolorum ipsa magni perferendis tempore voluptates quia.</p>
        </div>
      </Toggle>
      <Toggle title="What Products Do You Offer">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora commodi perspiciatis excepturi impedit.</p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
   );
}

const Faq = styled(Layout)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  h4{
    padding: 1.5rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding: 1rem 0rem;
    p{
      padding: 1rem 0rem;
    }
  }
`
 
export default FaqSection;