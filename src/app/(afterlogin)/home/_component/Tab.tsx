'use client';

import { useState } from "react";
import styles from "./tab.module.css";

export default function Tab() {
    const [tab, setTab] = useState('rec');

    const onClickRec = () => {
        setTab('rec')
    }
    const onClickFol = () => {
        setTab('fol')
    }
    return (
        <div className={styles.homeFixed}>
            <div className={styles.homeText}></div>
            <div className={styles.homeTab}>
                <div onClick={onClickRec}>
                    추천
                    <div className={styles.tabIndicator} hidden={tab === 'fol'}></div>
                </div>
                <div onClick={onClickFol}>
                    팔로우 중
                    <div className={styles.tabIndicator} hidden={tab === 'rec'}></div>
                </div>
            </div>

        </div>
    )
}