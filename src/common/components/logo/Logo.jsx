import inazumaLogo from "@assets/images/logo.png";

const Logo = ({style = {}}) => {

	return (
		<img
			src={inazumaLogo}
			alt=""
			style={style}
		/>
	);
};

export default Logo;