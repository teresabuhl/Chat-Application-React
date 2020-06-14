import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<p>{room}</p>
		</div>
		<div className="rightInnerContainer">
			<a href="/">
				<FontAwesomeIcon icon={faWindowClose} className="closeIcon" />
			</a>
		</div>
	</div>
);

export default InfoBar;
