import * as React from "react";
import Banner from "./01-banner/Banner";
import Pushups from "./03-pushups/Pushups";
import AboutIntro from "./04-about-intro/AboutIntro";
import Bottom from "./05-bottom/Bottom";
import "./App.sass";

export default function App(): JSX.Element {
	return <>
		<Banner />
		<div className="section has-background-primary">
			<div className="container has-text-centered has-text-light">
				<p className="block is-size-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>
		<Pushups />
		<AboutIntro />
		<Bottom />
	</>;
}