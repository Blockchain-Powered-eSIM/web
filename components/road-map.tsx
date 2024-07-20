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
		<section className="container text-esim-black-50 -mt-1 py-12">
			<div className="flex flex-col gap-5">
				<h2 className="text-4xl font-bold text-center uppercase">
					{" "}
					- Road Ahead -{" "}
				</h2>
				{roadMapData.map((roadMap) => (
					<div key={roadMap.title} className="text-center flex flex-col gap-4">
						<h3 className="text-4xl font-bold">{roadMap.title}</h3>
						<ul className="flex flex-col gap-3">
							{roadMap.milestones.map((milestone) => (
								<li key={milestone} className="text-xl font-light">
									{milestone}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
RoadMap.displayName = "RoadMap";

export { RoadMap };
