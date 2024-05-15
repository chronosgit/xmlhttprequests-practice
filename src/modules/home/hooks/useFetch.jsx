import { useState } from "react";

const useFetch = () => {

	const [isFetchActive, setFetchActive] = useState(false);

	const fetch = () => {
		if(isFetchActive) {
			return;
		}

		setFetchActive(true);

		// TODO: fetch logic using XMLHttpRequest here

		// WARN: the following code is dummy logic to test spinners type shit
		console.log("Fetching...")

		setTimeout(() => {
			setFetchActive(false);
			console.log("Fetch has ended!")
		}, 3000);
	};

	return {
		isFetchActive, fetch,
	};
};

export default useFetch;