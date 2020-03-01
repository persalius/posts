import * as Yup from "yup";

const PostSchema = Yup.object().shape({
    author: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long").required("Required"),
    postName: Yup.string()
        .min(2, "Must be longer than 2 characters").required("Required"),
    postContent: Yup.string()
        .min(2, "Must be longer than 2 characters").required("Required")
});


export default PostSchema;
