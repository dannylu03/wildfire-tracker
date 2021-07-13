import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <Icon icon={locationIcon} />
                WildFire Tracker
            </h1>
        </header>
    );
};

export default Header;
