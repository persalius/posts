import React from "react";
import styles from "../styles/components/buttons";

interface IProps {
    text: string
}

const Button: React.FC<IProps> = ({text}) => {
    return (
        <button className="button">
            {text}
            <style jsx>{styles}</style>
        </button>
    );
};

export default Button;
