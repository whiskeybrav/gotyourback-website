import { text } from "@fortawesome/fontawesome-svg-core";
import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import * as React from "react";
import { useRefScrollProgress } from "../../util";
import "./AboutIntro.sass";

export default function AboutIntro(): JSX.Element {
	const [hasAnimated, setHasAnimated] = React.useState(false);

	const column1NumberAnimation = useAnimation();
	const column1TitleAnimation = useAnimation();
	const column2NumberAnimation = useAnimation();
	const column2TitleAnimation = useAnimation();
	const column3NumberAnimation = useAnimation();
	const column3TitleAnimation = useAnimation();
	const textAnimation = useAnimation();

	const sequence = async () => {
		await column1NumberAnimation.start({ opacity: 1 });
		await column1TitleAnimation.start({ opacity: 1 });
		await column2NumberAnimation.start({ opacity: 1 });
		await column2TitleAnimation.start({ opacity: 1 });
		await column3NumberAnimation.start({ opacity: 1 });
		await column3TitleAnimation.start({ opacity: 1 });
		await textAnimation.start({ opacity: 1 });
	};

	const ref = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;

	const { scrollYProgress } = useViewportScroll();
	const [hookedYPostion, setHookedYPosition] = React.useState(0);
	const logoContainerScrollInfo = useRefScrollProgress(ref);


	React.useEffect(() => {
		// hook into the onChange, store the current value as state.
		scrollYProgress.onChange(v => setHookedYPosition(v));
	}, [scrollYProgress, setHookedYPosition]); //make sure to re-subscriobe when scrollYProgress changes

	const scale = useTransform(scrollYProgress, [logoContainerScrollInfo.start, logoContainerScrollInfo.end], [0, 1]);


	if (scale.get() > 0.7 && hookedYPostion != 0 && !hasAnimated) {
		setHasAnimated(true);
		sequence();
	}


	return <div className="section has-background-dark has-text-light AboutIntro" ref={ref}>
		<div className="container">
			<div className="columns">
				<div className="column">
					<motion.h2 className="is-large-numeral" initial={{ opacity: 0 }} animate={column1NumberAnimation}>10</motion.h2>
					<motion.h3 className="title is-size-4 has-text-light" initial={{ opacity: 0 }} animate={column1TitleAnimation}>Pushups</motion.h3>
				</div>
				<div className="column">
					<motion.h2 className="is-large-numeral" initial={{ opacity: 0 }} animate={column2NumberAnimation}>1</motion.h2>
					<motion.h3 className="title is-size-4 has-text-light" initial={{ opacity: 0 }} animate={column2TitleAnimation}>Object on your back</motion.h3>
				</div>
				<div className="column">
					<motion.h2 className="is-large-numeral" initial={{ opacity: 0 }} animate={column3NumberAnimation}>3</motion.h2>
					<motion.h3 className="title is-size-4 has-text-light" initial={{ opacity: 0 }} animate={column3TitleAnimation}>People you're grateful for</motion.h3>
				</div>
			</div>
			<motion.hr initial={{ opacity: 0 }} animate={textAnimation} />
			<motion.div className="intro-list is-size-3" initial={{ opacity: 0 }} animate={textAnimation}>
				<ol>
					<li>Do 10 pushups with an object on your back</li>
					<li>Tag &amp; challenge 3 people you're grateful for</li>
					<li>Tag &amp; @whiskeybravo and #gotyourback</li>
				</ol>
			</motion.div>
		</div>
	</div>;
}