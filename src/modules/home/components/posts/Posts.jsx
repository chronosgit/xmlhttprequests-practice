import { useContext } from "react";
import PostsContext from "@modules/home/contexts/PostsContext";
import Post from "../post/Post";
import styles from "./posts.module.css";

const Posts = () => {

	const {posts} = useContext(PostsContext);

	if(posts == null || posts.length === 0) {
		return;
	}

	return (
		<div className={styles.posts}>
			{
				posts?.map((post) => <Post key={post?.id} post={post}/>)
			}
		</div>
	);
};

export default Posts;