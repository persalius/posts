import css from "styled-jsx/css";
import * as style from "../var";

export default css.global`
    .comments {
        border-top: 1px solid #ccc;
        margin-top: 20px;
        padding-top: 20px;
        padding-left: 40px;
    }
    
    .comment {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
    
    .comment__author {
        color: ${style.mainColor};
        font-size: 17px;
    }
    
    .comment__btns {
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
    }
    
    .comment__btn {
        position: relative;
        width: 30px;
        height: 30px;
        box-shadow: ${style.boxShadow};
        transition: 0.3s all;
        padding: 5px;
        margin-left: 10px;
        border-radius: 4px;
        
        &:hover {
            box-shadow: ${style.boxShadowHover};
        }
    }
`
