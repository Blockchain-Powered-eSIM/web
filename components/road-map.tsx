import React from "react";

const roadMapData = [
  {
    title: "Jan",
    milestones: [
      "Finalize audit",
      "Conduct QA internal testing",
    ],
  },
  {
    title: "Feb",
    milestones: ["Beta Testing", "Launch closed beta testing"],
  },
  {
    title: "March",
    milestones: [
      "Launch app",
      "Open app for public download and free data plan access",
    ],
  },
];

const RoadMap = () => {
  return (
    <section className="container flex flex-col items-center gap-14 py-12 text-esim-black-50 md:py-32">
      <div className="flex w-full max-w-4xl items-center justify-center gap-6 md:gap-14">
        <div className="flex-1 border-t border-gray-300 md:max-w-[63px]" />
        <h2 className="text-center text-4xl font-bold uppercase md:text-5xl">
          Road Ahead
        </h2>
        <div className="flex-1 border-t border-gray-300 md:max-w-[63px]" />
      </div>
      <div className="flex flex-col gap-20 lg:flex-row">
        {roadMapData.map((roadMap) => (
          <div
            key={roadMap.title}
            className="flex flex-1 flex-col gap-4 text-center"
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
