import css from "styled-jsx/css";

export default css.global`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: 0;
    }
    
    body {
        font-family: "roboto", sans-serif;
    }
    
    p, h1, h2, h3, h4, h5, h6, a {
      margin: 0;
      padding: 0;
      text-decoration: none;
    }
    
    input {
      border: none;
    }
    
    button {
      cursor: pointer;
      border: none;
      background: none;
    }
    
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    
    ul, ol {
      list-style: none;
    }
`
