import React from "react";
import styled from "styled-components";

const SLoader = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const Loader = () => {
  return (
    <SLoader>
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </SLoader>
  );
};

export default Loader;
