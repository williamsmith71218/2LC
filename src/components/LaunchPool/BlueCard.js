import React from "react";
import Logo from "../../assets/dodo.svg";

import { useHistory } from "react-router-dom";

function BlueCard({ status, icon, title, desc, rewards, period, endDate }) {
	const history = useHistory();
	return (
		<div
			onClick={() => {
				history.push("/launch-pool-individual");
			}}
			className="launch-pool-bluecard"
		>
			<div className="bluecard-head">
				<div className="d-flex align-items-center ">
					<img className="mr-3" src={Logo} alt="" />
					<span className="bluecard-head-title">DODO</span>
				</div>

				<span className="blue-card-status">COMPLETED</span>
			</div>
			<p className="launchpool-bluecard-desc">
				An open, accessible, capital-efficient decentralized exchange
				platform
			</p>
			<div className="blue-card-middle mt-4">
				<span>Total Rewards:</span> 1,069,518.0000
			</div>
			<div className="blue-card-middle">
				<span>Farming Period:</span>
				14 day/s
			</div>
			<hr className="mt-4 mb-4" />
			<div className="font-weight-bold">
				<span className="end-date"> Session end date:</span> 2021-03-05
			</div>
		</div>
	);
}

export default BlueCard;
