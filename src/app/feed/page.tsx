"use client";

import { useEffect } from "react";

const Page = () => {

	useEffect(() => {
		console.log('page loaded');
	}, []);

	return (
		<div>
			Feed Page!
		</div>
	);
};

export default Page;
