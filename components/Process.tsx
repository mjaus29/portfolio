import React from "react";

const Process = () => {
  const processSteps = [
    { icon: "/pen.svg", title: "Definition" },
    { icon: "/pic.svg", title: "Design" },
    { icon: "/plan.svg", title: "Planning" },
    { icon: "/dev.svg", title: "Development" },
    { icon: "/deply.svg", title: "Deployment" },
  ];

  return (
    <div className="section process-section">
      <div className="process-container">
        {processSteps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="process-icon-container">
              <div className="process-icon-bg"></div>
              <img
                src={step.icon}
                className="process-icon"
                alt={step.title}
              />
            </div>
            <div className="process-step-title">
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Process;
