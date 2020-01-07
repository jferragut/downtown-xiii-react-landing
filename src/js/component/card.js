import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function card() {
	return (
		<div className="text-center">
			<img src="..." class="card-img-top" alt="500 X 325" />
			<div class="cardBody">
				<h3>Card Title</h3>
				<p>
					This is the comment of the textbox, it is here just to fill
					it out.
				</p>
				<a href="#" class="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
}
