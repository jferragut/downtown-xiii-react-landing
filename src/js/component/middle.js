import React from "react";

//create your first component
export function Middle() {
	return (
		<div className="container mt-5 welcome">
			<h1 className="middleTitle">A Warm Welcome!</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&quote;s standard
				dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It
				has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</p>
			<a href="#" className="btn btn-primary">
				Call To Action
			</a>
		</div>
	);
}
