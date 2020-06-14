import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
	<form className="form">
		<input
			className="input"
			type="text"
			placeholder="Type a message..."
			value={message}
			onChange={({ target: { value } }) => setMessage(value)}
			onKeyPress={(event) =>
				event.key === "Enter" ? sendMessage(event) : null
			}
		/>
		<button className="sendButton" onClick={(e) => sendMessage(e)}>
			<FontAwesomeIcon icon={faAngleDoubleRight} />
		</button>
	</form>
);

export default Input;
