import React from "react";
import styles from "./Skill.module.css";

const Skill = ({title, color}) => {
    return (
        <div className={styles.wrapper}>
            <span style={{color: color}}>{title}</span>
        </div>
    );
};

export default Skill;