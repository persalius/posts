import css from "styled-jsx/css";
import * as style from "../var";

export default css`
    .header {
        padding: 10px 0;
        background: #fff;
        box-shadow: ${style.boxShadow};
        
        .container {
            display: flex;
            justify-content: flex-end;
        }
    }
`
