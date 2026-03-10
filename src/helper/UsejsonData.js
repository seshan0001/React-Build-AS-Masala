import { useState, useEffect } from "react";

const useJsonData = (path) => {
	const [data, setData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch(`/data/${path}.json`);
				if (!res.ok) throw new Error("Failed to load JSON");

				const json = await res.json();
				setData({ data: json, loading: false, error: null });
			} catch (err) {
				setData({ data: null, loading: false, error: err.message });
			}
		};

		loadData();
	}, [path]);

	return data;
};

export default useJsonData;
