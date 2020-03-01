import React, {useState} from "react";
import Button from "./Button";
import styles from "../styles/components/header";
import CreatePost from "./CreatePost";

const Header: React.FC = () => {
    const [openCreatePost, setOpenCreatePost] = useState<boolean>(false);

    return (
        <section className="header">
            <div className="container">
                <Button text="Create post" action={() => setOpenCreatePost(true)} />
                {openCreatePost && <CreatePost action={() => setOpenCreatePost(false)} />}
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default Header;
