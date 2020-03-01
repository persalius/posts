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
    postName: string,
    postContent: string
}

interface IProps {
    action: () => void,
    dispatch: Function
}

const ModalWindow: React.FC<IProps> = ({action, dispatch}) => {
    const initialValues: FormValues = {
        author: "",
        postName: "",
        postContent: ""
    };

    const formikSettings = {
        initialValues,
        validationSchema: PostSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            action();
            dispatch(post_create({
                item: {
                    author: values.author,
                    name: values.postName,
                    text: values.postContent
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
                                    name="postName"
                                    required
                                />
                                <TextArea
                                    label="Post content"
                                    name="postContent"
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
