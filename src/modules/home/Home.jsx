import Container from "@common/components/container/Container";
import Header from "./components/header/Header";
import { PostsContextProvider } from "./contexts/PostsContext";
import Posts from "./components/posts/Posts";

const Home = () => {

	const homeContainerStyles = {
		margin: "0 auto",
	};

	return (
		<Container maxWidth={800} style={homeContainerStyles}>
			<PostsContextProvider>
				<Header />

				<Posts />
			</PostsContextProvider>
		</Container>
	);
};

export default Home;