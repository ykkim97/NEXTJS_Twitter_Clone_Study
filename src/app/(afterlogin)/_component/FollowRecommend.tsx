'use client';

import styles from "./followRecommend.module.css"

export default function FollowRecommend() {
    const onFollow = () => {}
    const user = {
        id : "ykkim97",
        nickname : '영권',
        image : '/5Udwvqim.jpg',
    }
    return (
        <div className={styles.container}>
            <div className={styles.userLogoSection}>
                <div className={styles.userLogo}>
                    <img src={user.image} alt="id"/>
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.title}>{user.nickname}</div>
                <div className={styles.count}>@{user.id}</div>
            </div>
            <div className={styles.followButtonSection}>
                <button onClick={onFollow}>팔로우</button>
            </div>
        </div>
    )
}