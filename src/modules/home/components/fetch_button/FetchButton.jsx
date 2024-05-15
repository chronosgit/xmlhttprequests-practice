import mergeClassnames from "@common/utils/mergeClassnames";
import styles from "./fetch_button.module.css";
import { ClockLoader } from "react-spinners";

const FetchButton = ({onClick, isLoading = false}) => {

	if(onClick == null) {
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
					Fetch
				</button>
		}
	</>
	);
};

export default FetchButton;