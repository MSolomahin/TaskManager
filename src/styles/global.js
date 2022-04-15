import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    background-color: #F9F9F9;
  }

  .app {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;