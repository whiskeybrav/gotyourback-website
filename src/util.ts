import { useState, useLayoutEffect } from "react";

export function delay(millis: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, millis);
	});
}

export function useRefScrollProgress(inputRef: React.RefObject<HTMLElement>): { ref: React.RefObject<HTMLElement>, start: number, end: number } {
	const ref = inputRef;
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);
	useLayoutEffect(() => {
		if (!ref.current) {
			return;
		}
		const rect = ref.current.getBoundingClientRect();
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const offsetTop = rect.top + scrollTop;
		setStart(offsetTop / document.body.clientHeight);
		setEnd((offsetTop + rect.height) / document.body.clientHeight);
	}, [setStart, ref]);
	return { ref, start, end };
}