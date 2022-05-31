import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

function BtnPrimary({ title }) {
	return (
		<Button type="button" class="btn btn-primary">
			{title}
		</Button>
	);
}

BtnPrimary.propTypes = {
	title: PropTypes.string.isRequired,
};

BtnPrimary.defaultProps = {
	title: "Button",
};

export default BtnPrimary;
