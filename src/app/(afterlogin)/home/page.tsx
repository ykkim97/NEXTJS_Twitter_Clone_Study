import Post from "@/app/(afterlogin)/_component/Post";
import Tab from "./_component/Tab";
import styles from "./home.module.css";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
