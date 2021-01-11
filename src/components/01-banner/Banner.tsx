import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import * as util from "../../util";

import "./Banner.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import bg from "../../img/bg.jpg";
import logo from "../../img/got-your-back-cropped.png";

export default function Banner(): JSX.Element {
	const hashtag = useAnimation();
	const byline = useAnimation();
	const arrowContainer = useAnimation();
	const logoAnimation = useAnimation();

	const sequence = async () => {
		await util.delay(200);
		logoAnimation.set({ scale: 10 });
		await logoAnimation.start({
			scale: 1,
			opacity: 1,
		});
		await util.delay(750);
		await hashtag.start({ opacity: 1 });
		await byline.start({ opacity: 1 });
		await util.delay(1500);
		return await arrowContainer.start({ opacity: 1 });
	};

	React.useEffect(() => {
		sequence();
	});

	return <div className="hero is-fullheight is-dark banner" style={{ backgroundImage: `url(${bg})` }}>
		<div className="hero-body">
			<div className="container has-text-centered">
				<motion.img initial={{ scale: 0, opacity: 0 }} src={logo} animate={logoAnimation} transition={{ type: "tween" }} alt="" className="logo-top" />
				<motion.h1 className="title is-caps is-hashtag" initial={{ opacity: 0 }} animate={hashtag}>
					#GotYourBack
				</motion.h1>
				<motion.h2 className="subtitle is-byline" initial={{ opacity: 0 }} animate={byline}>
					By Whiskey Bravo
				</motion.h2>
			</div>
		</div>
		<div className="hero-footer">
			<motion.div initial={{ opacity: 0 }} animate={arrowContainer} className="arrow-container">
				<motion.div
					animate={{
						y: [0, 10, 0]
					}}
					transition={{
						loop: Infinity,
						repeatDelay: 1
					}}>
					<FontAwesomeIcon icon={faArrowDown} size={"2x"} />
				</motion.div>
			</motion.div>

		</div>
	</div>;
}