import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const PostsContext = createContext({});

const PostsContextProvider = ({children}) => {

	const {isFetchActive, fetch} = useFetch();

	const contextVal = {
		isFetchActive, fetch,
	};

	return (
		<PostsContext.Provider value={contextVal}>
			{children}
		</PostsContext.Provider>
	);
};

export default PostsContext;
export {PostsContextProvider};