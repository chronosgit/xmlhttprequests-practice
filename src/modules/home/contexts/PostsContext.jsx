import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const PostsContext = createContext({});

const PostsContextProvider = ({children}) => {

	const {
		isFetchActive, setFetchActive, 
		xhrFetch, modernFetch
	} = useFetch();
	const [posts, setPosts] = useState([]);

	const getPosts = (isXhr) => {
		const fetcher = isXhr ? xhrFetch() : modernFetch();

		fetcher
		.then(res => {
			if(isXhr) {
				return res;
			} 
			
			return res.json();
		})
		.then(res => {
			setPosts(res);
			
			setFetchActive(false);
		})
		.catch(err => {
			console.error(err);

			setFetchActive(false);
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