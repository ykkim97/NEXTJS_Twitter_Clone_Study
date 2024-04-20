'use client';
import styles from "@/app/(afterlogin)/_component/rightSearchZone.module.css"
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
    const pathName = usePathname();
    const onChangeFollow = () => {}
    const onChangeAll = () => {}

    if (pathName === '/explore') return null;

    if (pathName === '/search') {
        return (
            <div>
                <h5 className={styles.filterTitle}>검색 필터</h5>
                <div className={styles.filterSection}>
                <div>
                    <label>사용자</label>
                    <div className={styles.radio}>
                    <div>모든 사용자</div>
                    <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                    </div>
                    <div className={styles.radio}>
                    <div>내가 팔로우하는 사람들</div>
                    <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                    </div>
                </div>
                </div>
            </div>
        )
    }

    return (
        <SearchForm />
    )
}