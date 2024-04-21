import CommentForm from "@/app/(afterlogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/app/(afterlogin)/_component/ActionButtons";
import Post from "@/app/(afterlogin)/_component/Post";
import { faker } from "@faker-js/faker";
import styles from "./photoModal.module.css"
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";

export default function PhotoModal() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
          content: faker.lorem.text()
        }
      }


    return (
        <div className={styles.container}>
            <PhotoModalCloseButton />
            <div className={styles.imageZone}>
                <img src={photo.link} alt={photo.Post?.content} />
                <div className={styles.image} style={{backgroundImage: `url(${photo.link})`}} />
                <div className={styles.buttonZone}>
                <div className={styles.buttonInner}>
                    <ActionButtons />
                </div>
                </div>
            </div>
            <div className={styles.commentZone}>
                <Post noImage />
                <CommentForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}