import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card() {
	return (
		<div className="text-center cardBody">
			<div className="box my-4 border border-light rounded">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt
				/>
				<div>
					<h5>Card Title</h5>
					<p className="px-3 py-3">
						This is the comment of the textbox, it is here just to
						fill it out.This is the comment of the textbox, it is
						here just to fill it out.
					</p>
				</div>
				<div className="bg-light">
					<hr />
					<a href="#" className="btn btn-primary my-1">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
