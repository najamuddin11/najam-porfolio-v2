import React from "react";
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";
import particleType from "./particleType";
import styled from "styled-components";
import Particles from "./Particles";

const urlPropsQueryConfig = {
  background: {
    type: UrlQueryParamTypes.string,
    // defaultValue: "var(--bg-primary)",
    defaultValue: "transparent",
  },
  particles: { type: particleType },
};

const ParticleContainer = styled.div`
  height: 100%;
  top: 0;
  background: ${(props) => props.background};
  position: absolute;
  z-index: 1;
  // opacity: 0.6;
`;
const ParticleComponent = ({ background, particles }) => {
  return (
    <div>
      <ParticleContainer background={background}>
        <Particles particles={particles} />
      </ParticleContainer>
    </div>
  );
};
const HeaderParticles = addUrlProps({ urlPropsQueryConfig })(ParticleComponent);

export default HeaderParticles;
