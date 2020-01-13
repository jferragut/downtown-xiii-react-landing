import React from "react";

//create your first component
export function Navbar() {
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];

	const menuItems = menu.map((item, index) => (
		<li className="nav-item active" key={index}>
			<a className="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	return (
		<nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">{menuItems}</ul>
			</div>
		</nav>
	);
}
