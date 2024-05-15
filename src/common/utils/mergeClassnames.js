
const mergeClassnames = (...classNames) => {
	return classNames.filter(className => className).join(" ");
};

export default mergeClassnames;