import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingIn.css";

const SingIn = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
						placeholder="Name"
						className="joinInput"
						type="text"
						onChange={({ target: { value } }) => setName(value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className="joinInput"
						type="text"
						onChange={({ target: { value } }) => setRoom(value)}
					/>
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className="singInButton" type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SingIn;
