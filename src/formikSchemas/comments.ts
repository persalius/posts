import * as Yup from "yup";

const CommentsSchema = Yup.object().shape({
    author: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long").required("Required"),
    comment: Yup.string()
        .min(2, "Must be longer than 2 characters").required("Required")
});


export default CommentsSchema;
