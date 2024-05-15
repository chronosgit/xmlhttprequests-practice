import componentTypes from "@common/utils/containerTypes";

const Container = ({maxWidth, type = "div", children}) => {

	if(maxWidth == null) {
		return;
	}

	let ContainerType = componentTypes[type] || <div></div>;

	return (
		<ContainerType>
			{children}
		</ContainerType>
	);	
};

export default Container;