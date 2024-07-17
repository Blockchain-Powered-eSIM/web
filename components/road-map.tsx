import React from "react";

const roadMapData = [
	{
		title: "Aug",
		milestones: [
			"Submit smart contract for audit",
			"Conduct QA internal testing",
		],
	},
	{
		title: "Sept",
		milestones: ["Finalize audit", "Launch closed beta testing"],
	},
	{
		title: "Oct",
		milestones: [
			"Launch app",
			"Open app for public download and free data plan access",
		],
	},
];

const RoadMap = () => {
	return (
		<section>
			<h2>Road Ahead</h2>
			{roadMapData.map((roadMap) => (
				<div key={roadMap.title} className="">
					<h3>{roadMap.title}</h3>
					<ul>
						{roadMap.milestones.map((milestone) => (
							<li key={milestone}>{milestone}</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};
RoadMap.displayName = "RoadMap";

export { RoadMap };
