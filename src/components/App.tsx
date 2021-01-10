import * as React from "react";
import Banner from "./01-banner/Banner";
import Pushups from "./03-pushups/Pushups";
import "./App.sass";

export default function App(): JSX.Element {
	return <>
		<Banner />
		<Pushups />
	</>;
}