import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const PostsContext = createContext({});

const PostsContextProvider = ({children}) => {

	const {isFetchActive, fetch} = useFetch();
	const [posts, setPosts] = useState([]);

	const getPosts = () => {
		const fetcher = fetch();

		fetcher.then(res => {
			setPosts(res);
		});
	};

	const contextVal = {
		isFetchActive, posts, getPosts,
	};

	return (
		<PostsContext.Provider value={contextVal}>
			{children}
		</PostsContext.Provider>
	);
};

export default PostsContext;
export {PostsContextProvider};