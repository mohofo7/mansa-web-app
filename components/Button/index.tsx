import React from "react";
import styles from "./style.module.scss";

interface IButton {}

const Button: React.FC<IButton> = (props: IButton) => {
    const {} = props;
    return (
        <button className={styles.mnsButton}>Click me!</button>
    );
};

Button.defaultProps = {};

export default Button;