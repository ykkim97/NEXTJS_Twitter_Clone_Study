
import BackButton from "@/app/(afterlogin)/_component/BackButton";
import styles from "./singlePost.module.css";
import Post from "@/app/(afterlogin)/_component/Post";
import CommentForm from "./_component/CommentForm";

export default function SinglePost() {
  const user = {
    id: 'ykkim97',
    nickname: '영권',
    image: '/5Udwvqim.jpg'
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      

    </div>
  );
}
