import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import buttonStyles from "./buttons.module.scss";

function BtnPrimary({ buttonLabel, className, disabled, type }) {
	return (
		<>
			<Button
				name={buttonLabel}
				className={className}
				disabled={disabled}
				type={type}
			>
				<FiCheck /> {buttonLabel}
			</Button>
		</>
	);
}

BtnPrimary.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
};

BtnPrimary.defaultProps = {
	className: `${buttonStyles.btnPrimary}`,
	type: "submit",
};

export default BtnPrimary;
