import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import bg from "../../img/bg.jpg";

import "./CopyHeader.sass";

export default (): JSX.Element => <div className="section has-background-primary has-background-dirt CopyHeader" style={{ backgroundImage: `url(${bg})` }}>
	<div className="container has-text-centered has-text-light">
		<h1 className="is-size-1 has-text-centered">
			<FontAwesomeIcon icon={faQuoteLeft} />
		</h1>
		<h2 className="block is-size-2 text">
			2020 was a challenging year. Whiskey Bravo is committed to recognizing the United States Military who’s always got our back.
			Who has #gotyourback? Take a moment to recognize those you’re grateful for. Show them the strength they provide you by doing 5 pushups with an object on your back and nominating 3 people to keep the chain of gratitude going. Post on social with #gotyourback and tag @whiskeybrav		</h2>
		<h1 className="is-size-1 has-text-centered">
			<FontAwesomeIcon icon={faQuoteRight} />
		</h1>
	</div>
</div>;