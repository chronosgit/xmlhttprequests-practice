import componentTypes from "@common/utils/containerTypes";

const Container = ({maxWidth, type = "div", style = {}, children}) => {

	if(maxWidth == null) {
		return;
	}

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