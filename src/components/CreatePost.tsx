import React from "react";
import {connect} from "react-redux";
import {Form, Formik} from "formik";
import Input from "./elements/Formik-Field";
import TextArea from "./elements/Formik-Textarea";
import PostSchema from "../formikSchemas/createPost";
import styles from "../styles/components/modalWindow";
// Actions
import {post_create} from "../redux/actions/posts";

interface FormValues {
    author: string,
    title: string,
    content: string
}

interface IProps {
    action: () => void,
    dispatch: Function
}

const ModalWindow: React.FC<IProps> = ({action, dispatch}) => {
    const initialValues: FormValues = {
        author: "",
        title: "",
        content: ""
    };

    const formikSettings = {
        initialValues,
        validationSchema: PostSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            action();
            dispatch(post_create({
                newPost: {
                    author: values.author,
                    title: values.title,
                    content: values.content
                }
            }))
        }
    };

    return (
        <div className="modal">
            <div className="modal__black" onClick={action} />

            <div className="modal__block">
                <h2>Create new post</h2>
                <Formik {...formikSettings}>
                    { formikProps => {
                        return (
                            <Form>
                                <Input
                                    label="Author name"
                                    name="author"
                                    required
                                />
                                <Input
                                    label="Post title"
                                    name="title"
                                    required
                                />
                                <TextArea
                                    label="Post content"
                                    name="content"
                                    type="textarea"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="post-confirm"
                                    disabled={!formikProps.isValid}
                                >
                                    Create post
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

export default connect()(ModalWindow);
