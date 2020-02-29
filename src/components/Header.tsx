import React from "react";
import Button from "./Button";
import styles from "../styles/components/header";

const Header: React.FC = () => {
    return (
        <section className="header">
            <div className="container">
                <Button text="Create post" />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default Header;
