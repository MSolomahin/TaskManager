import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.5s;
  }

  .app {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  body {
  margin: 0;
  font-family: 'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F9F9F9;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .my-masonry-grid {
    display: flex;
    margin-left: -10px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; 
    min-width: 200px;
    flex-grow: 1;
  }
  
  .my-masonry-grid_column > div { 
  }

  .loading {
    text-align: center;
    width: 100px;
    height: 100px;
    border: 1px dotted black; 
  }

`;
