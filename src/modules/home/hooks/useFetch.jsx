import { useState } from "react";

const useFetch = () => {

	const [isFetchActive, setFetchActive] = useState(false);

	const fetch = () => {
		if(isFetchActive) {
			return;
		}

		setFetchActive(true);

		const baseUrl = import.meta.env.VITE_BASE_URL;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", baseUrl + `/todos?_limit=${7}`);
		xhr.responseType = "json";

		return new Promise((resolve, reject) => {
      xhr.onload = () => {
        setFetchActive(false);
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        setFetchActive(false);
        reject(new Error("Fetch request resulted in error"));
      };

      xhr.send();
    });
	};

	return {
		isFetchActive, fetch,
	};
};

export default useFetch;