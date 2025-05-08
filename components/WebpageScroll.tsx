"use client";
import React from "react";

interface WebpageScrollProps {
  project: string;
}

const WebpageScroll: React.FC<WebpageScrollProps> = ({ project }) => {
  const getProjectUrl = (projectName: string) => {
    return `https://${projectName}.markaustria.com/`;
  };

  const projectUrl = getProjectUrl(project);

  return (
    <div className="w-full mx-auto">
      <div className="iframe-container">
        <div className="iframe-wrapper">
          <iframe
            src={projectUrl}
            title={`${project} website preview`}
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        <div className="visit-button">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span>Visit Website</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-sm text-gray-400 text-center">
        Scroll within the frame to explore the website or click &quot;Visit
        Website&quot; to open in a new tab
      </div>
    </div>
  );
};

export default WebpageScroll;
