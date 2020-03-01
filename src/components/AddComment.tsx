import React from "react";
import {connect} from "react-redux";
import {Form, Formik} from "formik";
import Input from "./elements/Formik-Field";
import TextArea from "./elements/Formik-Textarea";
import CommentsSchema from "../formikSchemas/comments";
import styles from "../styles/components/modalWindow";
// Actions
import {comment_add, comment_edit} from "../redux/actions/comments";

interface FormValues {
    author: string,
    comment: string
}

type actionType = "add" | "edit";

interface IProps {
    dispatch: Function,
    postId: number,
    closeWindow: () => void,
    title: string,
    type: "add" | "edit"
}

const AddComment: React.FC<IProps> = ({postId, closeWindow, title, type, dispatch}) => {
    const initialValues: FormValues = {
        author: "",
        comment: ""
    };

    const handleSubmit = (values) => {
        const comment = {
            author: values.author,
            text: values.comment,
            id: postId
        };
        if (type === "add") {
            dispatch(comment_add({comment}));
        } else {
            dispatch(comment_edit({comment}));
        }
        closeWindow();
    };

    const formikSettings = {
        initialValues,
        validationSchema: CommentsSchema,
        validateOnMount: true,
        onSubmit: (values) => handleSubmit(values)
    };

    return (
        <div className="modal">
            <div className="modal__black" onClick={closeWindow} />

            <div className="modal__block">
                <h2>{title}</h2>
                <Formik {...formikSettings}>
                    { formikProps => {
                        return (
                            <Form>
                                <Input
                                    label="Author name"
                                    name="author"
                                    required
                                />
                                <TextArea
                                    label="Comment"
                                    name="comment"
                                    type="textarea"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="post-confirm"
                                    disabled={!formikProps.isValid}
                                >
                                    {title}
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>

            <style jsx>{styles}</style>
        </div>
    );
};

export default connect()(AddComment);
