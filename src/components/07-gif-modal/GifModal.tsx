import { faSync, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import PushupItems from "../../../pushup-items.json";

interface GifModalProps {
	isShown: boolean
	setIsShown(isShown: boolean): void
}

export default function GifModal(props: GifModalProps): JSX.Element {

	const [item, setItem] = React.useState(PushupItems[Math.floor(Math.random() * PushupItems.length)]);

	const generateNewItem = (): void => {
		setItem(PushupItems[Math.floor(Math.random() * PushupItems.length)]);
	};

	return <div className={`modal ${props.isShown ? "is-active" : ""}`}>
		<div className="modal-background"></div>
		<div className="modal-content">
			<header className="modal-card-head">
				<p className="modal-card-title">Find an object</p>
				<button className="delete" aria-label="close" onClick={() => props.setIsShown(false)}></button>
			</header>
			<section className="modal-card-body has-text-centered">
				<p>You should do pushups with</p>
				<h2 className="is-size-3">{item}</h2>
				<p>on your back</p>
			</section>
			<footer className="modal-card-foot">
				<button className="button is-primary" onClick={generateNewItem}>
					<FontAwesomeIcon icon={faSync} fixedWidth className="mr-3" />
					Generate another idea
				</button>
				<button className="button" onClick={() => props.setIsShown(false)}>
					<FontAwesomeIcon icon={faTimesCircle} fixedWidth className="mr-3" />
					Close
				</button>
			</footer>
		</div>
	</div>;
}