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
    <section className="container text-esim-black-50 py-12 md:py-32 flex flex-col gap-14 items-center">
      <div className="flex items-center justify-center w-full max-w-4xl gap-6 md:gap-14">
        <div className="flex-1 border-t border-gray-300 md:max-w-[63px]" />
        <h2 className="text-4xl font-bold text-center uppercase md:text-5xl">
          Road Ahead
        </h2>
        <div className="flex-1 border-t border-gray-300 md:max-w-[63px]" />
      </div>
      <div className="flex flex-col gap-20 lg:flex-row">
        {roadMapData.map((roadMap) => (
          <div
            key={roadMap.title}
            className="text-center flex flex-col gap-4 flex-1"
          >
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
