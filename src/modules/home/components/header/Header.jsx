import { useContext } from "react";
import PostsContext from "@modules/home/contexts/PostsContext";
import Container from "@common/components/container/Container";
import Logo from "@common/components/logo/Logo";
import FetchButton from "../fetch_button/FetchButton";

const Header = () => {

	const {isFetchActive, getPosts} = useContext(PostsContext);

	const headerStyles = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingInline: "1rem",
		borderBlockEnd: "1px solid var(--color_purple)",
	};

	return (
		<Container type="header" style={headerStyles}>
			<Logo style={{maxWidth: "5rem"}} />
			
			<FetchButton
				isLoading={isFetchActive} 
				onClick={getPosts} 
			/>
		</Container>
	);
};

export default Header;