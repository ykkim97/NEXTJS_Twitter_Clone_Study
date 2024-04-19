'use client';

import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend() {

    return (
        <Link href={`/search?q=트렌드`} className={styles.container}>
            <div className={styles.count}>실시간 트렌드</div>
            <div className={styles.title}>20대 패션</div>
            <div className={styles.count}>1,432 posts</div>
        </Link>
    )
}