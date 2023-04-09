import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
   children: ReactNode;
}

const Card = ({ children }: Props) => {
   return <div className={styles.container}>{children}</div>;
};

export default Card;
