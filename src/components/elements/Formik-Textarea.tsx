import React, {ReactNode} from "react";
import {useField} from "formik";
import styles from "../../styles/components/field";

interface Props {
    label?: string,
    required?: boolean,
    placeholder?: string,
    name: string,
    type?: string
}

const TextArea:React.FC<Props> = ({ label, required, ...props }) => {
    // @ts-ignore
    const [field, meta] = useField(props);

    return (
        <div className="input-block">
            <textarea
                className={field.value ? "input not-empty" : "input"}
                type="text"
                {...field}
                {...props}
            />

            {   !props.placeholder &&
            <label className="input-label">
                {label}
                {required ? <span> *</span> : null}
            </label>
            }

            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}

            <style jsx>{styles}</style>
        </div>
    );
};

export default TextArea;
