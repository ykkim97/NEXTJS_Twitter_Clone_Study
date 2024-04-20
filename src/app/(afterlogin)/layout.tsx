import { ReactNode } from "react";
import styles from "@/app/(afterlogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import LogOutButton from "./_component/LogOutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";

type Props = { children : ReactNode, modal : ReactNode };

export default function Layout({ children, modal } : Props) {
    return (
        <div className={styles.container}>
            <header className={styles.leftSectionWrapper}>
                <section className={styles.leftSection}>
                    <div className={styles.leftSectionFixed}>
                        <Link className={styles.logo} href="/home">
                            <div className={styles.logoPill}>
                                <Image src={ZLogo} alt="z_logo" width={40} height={40} />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href="/compose/tweet" className={styles.postButton}>게시하기</Link>
                        </nav>
                        <LogOutButton />
                    </div>
                </section>
            </header>
            <div className={styles.rightSectionWrapper}>
                <div className={styles.rightSectionInner}>
                    <main className={styles.main}>{children}</main>
                    <section className={styles.rightSection}>
                        <RightSearchZone />
                        <TrendSection />
                        <div className={styles.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
            {modal}
        </div>
    )
}