import React from "react";

const Header = (props) => (
	<header className="top">
		<h1>Catch
			<span className="ofThe">
				<span className="of">Of</span> 
				<span className="the">The</span>
			</span>
			Day</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
			{/* this is referring to the component instance define in App.js */}
		</h3>
	</header>
);

export default Header;