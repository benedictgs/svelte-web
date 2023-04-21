/**
 * @param {HTMLDivElement} node
 */
export function clickOutside(node) {
	const handleClick = (/** @type {{ target: Node | null; }} */ event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}