import css from "styled-jsx/css";
import * as style from "../var";

export default css`
  .modal {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 100;
  }
  
  .modal__block {
        width: 90%;
        max-width: 980px;
        min-height: 100px;
        max-height: 90vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        background: #fff;
        border-radius: 4px;
        box-shadow: ${style.boxShadowHover};
        padding: 43px 20px;
  }
  
  .modal__message {
    text-align: center;
  }
  
  .modal__close {
        position: absolute;
        top: 10px;
        right: 20px;
        transition: .3s;
        color: #424242;
        font-size: 27px;
        
        &:hover {
            color: #cb1717;
        }
  }
`
