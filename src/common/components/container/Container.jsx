import componentTypes from "@common/utils/containerTypes";

const Container = ({maxWidth = "100%", type = "div", style = {}, children}) => {
	
	let ContainerType = componentTypes[type] || <div></div>;
	
	const containerStyles = {
		maxWidth: maxWidth,
		...style,
	};

	return (
		<ContainerType style={containerStyles}>
			{children}
		</ContainerType>
	);	
};

export default Container;