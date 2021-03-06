import React from "react";
import {connect} from "react-redux";
import {Form, Formik} from "formik";
import Input from "./elements/Formik-Field";
import TextArea from "./elements/Formik-Textarea";
import CommentsSchema from "../formikSchemas/comments";
import styles from "../styles/components/modalWindow";
// Actions
import {comment_add, comment_edit} from "../redux/actions/comments";
// Types
import {CommentType} from "../types/posts";

interface FormValues {
    author: string,
    text: string
}

interface IProps {
    dispatch: Function,
    postId: number,
    comment: CommentType,
    closeWindow: () => void,
    title: string,
    type: "add" | "edit"
}

const AddComment: React.FC<IProps> = ({postId, comment, closeWindow, title, type, dispatch}) => {
    const initialValues: FormValues = {
        author: type === "edit" ? comment.author : "",
        text: type === "edit" ? comment.text : ""
    };

    const handleSubmit = (values) => {
        const commentItem = {
            author: values.author,
            text: values.text
        };

        if (type === "add") {
            dispatch(comment_add({postId, comment: commentItem}));
        } else {
            dispatch(comment_edit({postId, comment: {...commentItem, commentId: comment.commentId}}));
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
                                    name="text"
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
