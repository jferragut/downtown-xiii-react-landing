import React from "react";

import { Navbar } from "./navbar.js";
import { Middle } from "./middle.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Middle />
			<Footer />
		</div>
	);
}
