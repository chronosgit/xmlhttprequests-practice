import mergeClassnames from "@common/utils/mergeClassnames";
import styles from "./fetch_button.module.css";
import { ClockLoader } from "react-spinners";

const FetchButton = ({text, onClick, isLoading = false}) => {

	if(onClick == null || !text) {
		return;
	}

	if(isLoading) {
		<ClockLoader 
			color="#9759bd"
			loading={isLoading}	
		/>
	}

	return (
	<>
		{
			isLoading ?
				<ClockLoader 
					color="var(--color_purple)"
					size={30}
					loading={isLoading}	
				/> 
			:
				<button 
					className={mergeClassnames("button_normalize", styles.button)}
					onClick={onClick}
				>
					{text}
				</button>
		}
	</>
	);
};

export default FetchButton;