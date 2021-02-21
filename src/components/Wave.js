import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M0.5 90C386 688.5 1022.5 -273.5 1439.5 90" stroke="#23D997" strokeOpacity="0.5"
        strokeWidth="7"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;