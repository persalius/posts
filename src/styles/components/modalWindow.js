import css from "styled-jsx/css";
import * as style from "../var";

export default css`
  .modal {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
  }
  
  .modal__black {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
  }
  
  .modal__block {
        width: 90%;
        max-width: 600px;
        min-height: 100px;
        max-height: 90vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        background: #fff;
        border-radius: 4px;
        box-shadow: ${style.boxShadowHover};
        padding: 20px;
        
        h2 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #757575;
        }
  }
  
  .post-confirm {
    width: 100%;
    text-align: center;
    background: ${style.mainColor};
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    transition: 0.3s all;
    
    &:disabled {
        opacity: 0.5;
    }
  }
`
