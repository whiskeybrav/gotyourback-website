import * as React from "react";
import "./logo.sass";

import logo from "../../img/got-your-back-cropped.png";


import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import * as util from "../../util";

export default function Logo(): JSX.Element {
	const logoAnimation = useAnimation();
	const [hasAnimated, setHasAnimated] = React.useState(false);

	const sequence = async () => {
		logoAnimation.set({ scale: 10 });
		await logoAnimation.start({
			scale: 1,
			opacity: 1,
		});
	};

	const ref = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
	const { scrollYProgress } = useViewportScroll();
	const [hookedYPostion, setHookedYPosition] = React.useState(0);
	const logoContainerScrollInfo = util.useRefScrollProgress(ref);


	React.useEffect(() => {
		// hook into the onChange, store the current value as state.
		scrollYProgress.onChange(v => setHookedYPosition(v));
	}, [scrollYProgress, setHookedYPosition]); //make sure to re-subscriobe when scrollYProgress changes

	const scale = useTransform(scrollYProgress, [logoContainerScrollInfo.start, logoContainerScrollInfo.end], [0, 1]);

	if (scale.get() > 0 && hookedYPostion != 0 && !hasAnimated) {
		setHasAnimated(true);
		sequence();
	}

	return <div className="hero is-light" ref={ref}>
		<div className="hero-body">
			<div className="container has-text-centered">
				<motion.img initial={{ scale: 0, opacity: 0 }} src={logo} animate={logoAnimation} transition={{ type: "tween" }} alt="" className="logo-top" />
			</div>
		</div>
	</div>;
}