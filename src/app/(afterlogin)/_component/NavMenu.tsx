'use client'

import Link from "next/link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation"
import styles from "@/app/(afterlogin)/_component/navMenu.module.css";

export default function NavMenu() {
    const segment = useSelectedLayoutSegment();
    console.log(segment)
    const me = {
        id : 'ykkim97'
    }

    return (
        <>
            <li>
                <Link href="/home">
                    <div className={styles.navPill}>
                        {segment === 'home' ? (
                            <>
                                <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                    className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                                    <g>
                                        <path
                                        d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                                    </g>
                                </svg>
                                <div style={{fontWeight: 'bold'}}>홈</div>
                            </>
                        ) : (
                            <>
                                <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                    className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                                <g>
                                    <path
                                    d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
                                </g>
                                </svg>
                                <div>홈</div>
                            </>
                        )}
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/explore"></Link>
            </li>
            <li>
                <Link href="/messages">
                <div className={styles.navPill}>
                    {segment === 'messages' ?
                        <>
                            <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <g>
                                <path
                                d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                            </g>
                            </svg>
                            <div style={{fontWeight: 'bold'}}>쪽지</div>
                        </> :
                        <>
                            <svg width={26} viewBox="0 0 24 24" aria-hidden="true"
                                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <g>
                                <path
                                d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                            </g>
                            </svg>
                            <div>쪽지</div>
                        </>
                    }
                </div>
                </Link>
            </li>
            <li>
                <Link href="/search"></Link>
            </li>
        </>
    )
}