import React from "react";
import Container from "react-bootstrap/Container";
import bgVideoStyles from "./bgVideo.module.scss";

function BackgroundVideo() {
	return (
		<Container>
			<video loop autoPlay muted className={bgVideoStyles.bgVideo}>
				<source
					src={require("../../assets/bitsbots_landingpage_video.mp4")}
					type="video/mp4"
				/>
			</video>
		</Container>
	);
}

export default BackgroundVideo;
