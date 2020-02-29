import css from "styled-jsx/css";

export default css.global`
    body {
      background: #fafafa;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      padding: 0 15px;
      margin: 0 auto;
    }
    
    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
                
    .page-main {
      flex: 1;
      position: relative;
      margin: 15px 0;
    }
`
