import componentTypes from "@common/utils/containerTypes";

const Container = ({maxWidth, type = "div", style = {}, children}) => {

	if(maxWidth == null) {
		return;
	}

	let ContainerType = componentTypes[type] || <div></div>;

	return (
		<ContainerType style={style}>
			{children}
		</ContainerType>
	);	
};

export default Container;