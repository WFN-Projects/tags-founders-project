// this is the landing page that shows off our product and what not
// access through the root path

import React, { Component } from 'react';
import Button from "./button.jsx";
import Header from "./headerLP.jsx";
import Footer from "./footer.jsx";
import HomePage from "./homePage.jsx"
import styles from "../utils/homePage.css";

class Showcase extends Component {
	render() {
		return(
			<div>
				<Header />
				<div className="landing">
					<HomePage />
				</div>

				<div className="features">

				</div>

				<div className="demo">

				</div>

				<div className="about">

				</div>

				<div className="footer">

					<Footer />

				</div>

			</div>
		);
	}
}

export default Showcase;
