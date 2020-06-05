import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./style.module.scss";

interface ILayout extends React.HTMLProps<HTMLDivElement> {}

const Layout: React.FC<ILayout> = (props: ILayout) => {
    const { children, ...rest } = props;
    return (
        <div {...rest}>
            <Header />
            <section className={styles.section}>
                {children}
            </section>
        </div>
    );
};

export default Layout;