import React from "react";
import styles from "../styles/components/modalWindow";

const ModalWindow = () => {
    return (
        <div className="modal">
            <div className="modal__block">
                <button className="modal__close"><i className="far fa-times-circle"></i></button>
                <p className="modal__message"></p>
            </div>

            <style jsx>{styles}</style>
        </div>
    );
};

export default ModalWindow;