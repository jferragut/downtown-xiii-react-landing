import React from "react";

import { Navbar } from "./navbar.js";
import { Middle } from "./middle.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Middle />
		</div>
	);
}
