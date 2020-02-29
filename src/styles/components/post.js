import css from "styled-jsx/css";
import * as style from "../var";

export default css.global`
    .post {
        background: #fff;
        box-shadow: ${style.boxShadow};
        border-radius: 4px;
        padding: 10px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 14px;
        margin-bottom: 10px;
    }
    
    .post__author {
        color: ${style.mainColor};
        font-size: 20px;
    }
    
    .post__name {
        margin: 10px 0;
    }
    
    .post__actions {
        margin-top: 20px;
        display: flex;
        align-items: center;
        
        .button:first-of-type {
            margin-right: 10px;
        }
    }
`
