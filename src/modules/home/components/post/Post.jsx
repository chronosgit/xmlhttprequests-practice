import styles from "./post.module.css";

const Post = ({post}) => {
	
	if(post == null || !post.title || !post.body) {
		return;
	}

	return (
		<div className={styles.post}>
			<p className={styles.title}>{post?.title}</p>

			<p className={styles.body}>{post?.body}</p>
		</div>
	);
};

export default Post;