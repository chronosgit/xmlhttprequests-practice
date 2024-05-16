import Container from "@common/components/container/Container";
import HomeHeader from "./components/header/Header";
import { PostsContextProvider } from "./contexts/PostsContext";

const Home = () => {

	const homeContainerStyles = {
		margin: "0 auto",
	};

	return (
		<Container maxWidth={800} style={homeContainerStyles}>
			<PostsContextProvider>
				<HomeHeader />

				
			</PostsContextProvider>
		</Container>
	);
};

export default Home;