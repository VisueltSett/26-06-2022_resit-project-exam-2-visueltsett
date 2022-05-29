import React from "react";
import PropTypes from "prop-types";

function Heading({ title, size }) {
	const HeadingSize = `h${size}`;

	return (
		<>
			<HeadingSize> {title}</HeadingSize>
		</>
	);
}

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.string,
};

Heading.defaultProps = {
	size: "1",
};

export default Heading;
