import React from "react";
import styles from "../styles/components/buttons";

interface IProps {
    text: string,
    action: () => void
}

const Button: React.FC<IProps> = ({text, action}) => {
    return (
        <button className="button" onClick={action}>
            {text}
            <style jsx>{styles}</style>
        </button>
    );
};

export default Button;
