import * as React from "react";
import Banner from "./01-banner/Banner";
import CopyHeader from "./02-copy-header/CopyHeader";
import Pushups from "./03-pushups/Pushups";
import AboutIntro from "./04-about-intro/AboutIntro";
import Bottom from "./05-bottom/Bottom";
import BottomSteps from "./06-bottom-steps/BottomSteps";
import "./App.sass";

export default function App(): JSX.Element {
	return <>
		<Banner />
		<AboutIntro />
		<Pushups />
		<CopyHeader />
		<BottomSteps />
		<Bottom />
	</>;
}