import css from "styled-jsx/css";
import * as style from "../var";

export default css`
    .button {
        padding: 10px;
        border-radius: 4px;
        font-weight: bold;
        color: ${style.mainColor};
        box-shadow: ${style.boxShadow};
        transition: 0.3s all;
        
        &:hover {
            box-shadow: ${style.boxShadowHover};
        }
    }
`
