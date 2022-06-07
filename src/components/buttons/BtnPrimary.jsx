import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import buttonStyles from "./buttons.module.scss";

function BtnPrimary({ buttonLabel }) {
	return (
		<>
			<Button
				name={buttonLabel}
				className={`${buttonStyles.btnPrimary} ${buttonStyles.disabled}`}
			>
				<FiCheck /> {buttonLabel}
			</Button>
		</>
	);
}

export default BtnPrimary;
