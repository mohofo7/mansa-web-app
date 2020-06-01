import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Button type="text" icon={<MenuOutlined />} size="large" />
            <img className={styles.headerLogo} src="/images/logo.png" alt="Mansa" />
        </header>
    );
};

export default Header;