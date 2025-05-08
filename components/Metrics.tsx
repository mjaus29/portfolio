import React from "react";

const Metrics = ({
  keyMetrics: { lighthousePerformance, accessibility, bestPractices, seo },
}: {
  keyMetrics: {
    lighthousePerformance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}) => {
  const metricItems = [
    { value: lighthousePerformance, label: "Performance" },
    { value: accessibility, label: "Accessibility" },
    { value: bestPractices, label: "Best Practices" },
    { value: seo, label: "SEO" },
  ];

  return (
    <div className="w-full max-w-[878px] flex flex-wrap justify-between gap-8 text-sky-50 text-xl font-normal leading-loose">
      {metricItems.map((metric, index) => (
        <div key={index} className="metric-item">
          <div className="metric-value">{metric.value}</div>
          <div className="metric-label">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};
export default Metrics;
