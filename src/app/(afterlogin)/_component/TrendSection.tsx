'use client';

import { usePathname } from "next/navigation";
import Trend from "./Trend";
import styles from "./trendSection.module.css";

export default function TrendSection() {
    const pathName = usePathname();
    if (pathName === '/explore') return null;
    return (
        <div className={styles.trendBg}>
            <div className={styles.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    )
}