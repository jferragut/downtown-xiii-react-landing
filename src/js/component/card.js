import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card() {
	return (
		<div className="text-center cardBody border-1">
			<div className="box my-4">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt
				/>
				<div>
					<h5>Card Title</h5>
					<p>
						This is the comment of the textbox, it is here just to
						fill it out.
					</p>
					<hr />
				</div>
				<div>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
