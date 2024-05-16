import { useState } from "react";

const useFetch = () => {

	const [isFetchActive, setFetchActive] = useState(false);

	const xhrFetch = () => {
		if(isFetchActive) {
			return;
		}

		setFetchActive(true);

		const baseUrl = import.meta.env.VITE_BASE_URL;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", baseUrl + `/posts?_limit=${7}`);
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

	const modernFetch = () => {
		if(isFetchActive) {
			return;
		}

		setFetchActive(true);

		const baseUrl = import.meta.env.VITE_BASE_URL;
		return fetch(baseUrl + `/posts?_limit=${7}`);
	};

	return {
		isFetchActive, setFetchActive, xhrFetch, modernFetch
	};
};

export default useFetch;