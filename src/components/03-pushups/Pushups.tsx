import * as React from "react";
import "./Pushups.sass";
import * as util from "../../util";

import pushup1 from "../../img/pushups/pushup1.jpg";
import pushup2 from "../../img/pushups/pushup2.jpg";
import pushup3 from "../../img/pushups/pushup3.jpg";
import pushup4 from "../../img/pushups/pushup4.jpg";
import pushup5 from "../../img/pushups/pushup5.jpg";
import pushup6 from "../../img/pushups/pushup6.jpg";


import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";

export default function Pushups(): JSX.Element {
	const slideLeft = {
		x: -400,
		opacity: 0,
	};

	const slideRight = {
		x: 400,
		opacity: 0,
	};

	const transition = {
		type: "tween",
		duration: 1
	};

	const slideIn = useAnimation();
	const zoomIn = useAnimation();
	const [hasAnimated, setHasAnimated] = React.useState(false);

	const sequence = async () => {
		slideIn.start({
			x: 0,
			opacity: 1,
		});
		zoomIn.start({
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


	if (scale.get() > 0.2 && hookedYPostion != 0 && !hasAnimated) {
		setHasAnimated(true);
		sequence();
	}


	return <div className="hero is-fullheight is-light is-bold pushups" ref={ref}>
		<div className="hero-body">
			<div className="tile is-ancestor">
				<div className="tile is-3 is-vertical is-parent is-hidden-mobile">
					<motion.div className="tile is-child box" initial={slideLeft} animate={slideIn} transition={transition}>
						<img src={pushup1} alt="" />
					</motion.div>
					<motion.div className="tile is-child box" initial={slideLeft} animate={slideIn} transition={transition}>
						<img src={pushup2} alt="" />
					</motion.div>
					<motion.div className="tile is-child box" initial={slideLeft} animate={slideIn} transition={transition}>
						<img src={pushup3} alt="" />
					</motion.div>
				</div>
				<motion.div className="tile is-parent" initial={{ scale: 0, opacity: 0 }} animate={zoomIn} transition={transition}>
					<div className="tile is-child box">
						<iframe className="embed" src="https://www.youtube-nocookie.com/embed/lM02vNMRRB0?controls=0&autoplay=1&modestbranding=1&start=1279&amp" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</motion.div>
				<div className="tile is-3 is-vertical is-parent is-hidden-mobile">
					<motion.div className="tile is-child box" initial={slideRight} animate={slideIn} transition={transition}>
						<img src={pushup4} alt="" />
					</motion.div>
					<motion.div className="tile is-child box" initial={slideRight} animate={slideIn} transition={transition}>
						<img src={pushup5} alt="" />
					</motion.div>
					<motion.div className="tile is-child box" initial={slideRight} animate={slideIn} transition={transition}>
						<img src={pushup6} alt="" />
					</motion.div>
				</div>
			</div>
		</div>
	</div>;
}