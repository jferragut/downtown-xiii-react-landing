import React from "react";

import { Navbar } from "./navbar.js";
import { Middle } from "./middle.js";
import { Card } from "./card.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Middle />
			<div className="row text-center">
				<div className="col ml-5">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col mr-5">
					<Card />
				</div>
			</div>
		</div>
	);
}
