import css from "styled-jsx/css";
import * as style from "../var";

export default css.global`
    .input-block {
        position: relative;
        font-size: .9em;
        color: #424242;
        margin-bottom: 15px;
    }
    
    textarea.input {
        resize: vertical;
        min-height: 130px;
    }
    
    .input {
        width: 100%;
        display: block;
        padding: 9px 12px;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        background: #fff;
        font: 14px "Roboto", sans-serif;
        
        &:focus {
            border-color: ${style.mainColor};
            
            &+.input-label {
                top: -8px;
                background: #fff;
                font-size: 13px;
            } 
        }     
        
        &.not-empty+.input-label {
            top: -8px;
            background: #fff;
            font-size: 13px;
        }
    }
    

    
    .input-label {
        position: absolute;
        top: 9px;
        left: 10px;
        padding: 0 4px;
        pointer-events: none;
        transition: 0.2s all ease;
        outline: none;
        font-weight: 400;
        font-size: 14px;
        
        span {
            color: ${style.mainColor};
        }
    }
        
    .error {
        color: #f44336;
        font-size: 12.5px;
        padding-top: 5px;
    }
`;
