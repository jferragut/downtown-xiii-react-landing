import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Middle } from "./middle";

//create your first component
export function Home() {
	return (
		<div className="container mt-5 mb-5">
			<Middle />
		</div>
	);
}
