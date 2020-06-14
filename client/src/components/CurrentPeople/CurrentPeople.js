import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./CurrentPeople.css";

const CurrentPeople = ({ users }) => (
	<div className="textContainer">
		{users ? (
			<div>
				<div className="currentyPeople">
					<h2>People currently chatting</h2>
				</div>
				<div className="activeContainer">
					<h2>
						{users.map(({ name, id }) => (
							<div key={name} className="activeItem">
								<span key={id} className="userIconContainer">
									<FontAwesomeIcon icon={faUser} className="userIcon" />
								</span>
								{name}
								<FontAwesomeIcon icon={faCircle} className="onlineIcon" />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default CurrentPeople;
