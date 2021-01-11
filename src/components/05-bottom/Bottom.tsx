import * as React from "react";
import "./Bottom.sass";

export default function Bottom(): JSX.Element {
	return <div className="section Bottom">
		<div className="container">
			<div className="container">
				<div className="tile is-ancestor">
					<a className="tile is-parent" rel="noopener noreferrer" target="_blank" href="https://whiskeybravo.org">
						<article className="tile is-child box has-text-centered is-bottom-button has-background-primary has-text-light">
							<p className="block is-size-3">Help me find an object</p>
						</article>
					</a>
					<a className="tile is-parent" rel="noopener noreferrer" target="_blank" href="https://whiskeybravo.org">
						<article className="tile is-child box has-text-centered is-bottom-button has-background-primary has-text-light">
							<p className="block is-size-3">Learn more about Whiskey Bravo</p>
						</article>
					</a>
					<a className="tile is-parent" rel="noopener noreferrer" target="_blank" href="https://instagram.com/whiskeybrav/tagged">
						<article className="tile is-child box has-text-centered is-bottom-button has-background-primary has-text-light">
							<p className="block is-size-3">See what others are doing</p>
						</article>
					</a>
				</div>
			</div>
		</div>
	</div>;
}