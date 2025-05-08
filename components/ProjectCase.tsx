import React from "react";
import * as projects from "@/data/results";
import { projects as techs } from "@/data/index";
import Process from "@/components/Process";
import DeployedButton from "@/components/DeployedButton";
import Metrics from "@/components/Metrics";
import TableOfContents from "@/components/TableOfContents";
import WebpageScroll from "@/components/WebpageScroll";
import Image from "next/image";

const ProjectCase = ({ project }: { project: string }) => {
  const projectData = (projects as Record<string, any>)[project];
  const {
    image,
    link,
    summary,
    backgroundAndProblem,
    missionAndObjectives: { mission, mainChallenge, objectives },
    processAndKeyHighlights: { overview, keyHighlights },
    technologyStack,
    challengesAndSolutions,
    resultAndKeyAchievements: {
      outcomeSummary,
      keyMetrics: { lighthousePerformance, accessibility, bestPractices, seo },
    },
    conclusion,
    futureEnhancements,
  } = projectData;

  const sections = [
    { id: "summary", title: "Summary" },
    { id: "background", title: "Background & Problem" },
    { id: "mission", title: "Mission & Objectives" },
    { id: "process", title: "Development Process" },
    { id: "features", title: "Key Highlights" },
    ...(project !== "appraisal" && project !== "inspector"
      ? [
          {
            id: "preview",
            title: "Website Preview",
          },
        ]
      : []),
    {
      id: "challenges",
      title: "Challenges & Solutions",
    },
    { id: "results", title: "Results" },
    { id: "conclusion", title: "Conclusion" },
    { id: "future", title: "Future Enhancements" },
  ];

  const currentProject = techs.find((p) => p.project === project);

  return (
    <div className="relative min-h-screen mb-32 flex flex-col items-center gap-8">
      {/* Table of Contents */}
      <TableOfContents sections={sections} />

      {/* Hero Image */}
      <Image
        className="w-full max-w-[1044px] h-auto mix-blend-lighten mx-auto"
        src={image}
        alt="Project Screenshot"
        width={1044}
        height={600}
      />

      {/* Deployed Button */}
      <DeployedButton project={project} link={link} />

      {/* Project Summary */}
      <div id="summary" className="section">
        <div className="case-study-label">PROJECT OVERVIEW</div>
        <div className="section-title">Summary</div>
        <div className="section-content">{summary}</div>
      </div>

      {/* Background & Problem */}
      <div id="background" className="section">
        <div className="case-study-label">CONTEXT</div>
        <div className="section-title">Background & Problem</div>
        <div className="section-content">{backgroundAndProblem}</div>
      </div>

      {/* Mission & Objectives */}
      <div id="mission" className="section">
        <div className="case-study-label">GOALS</div>
        <div className="section-title">Mission & Objectives</div>

        <div className="card-grid">
          {[
            { title: "Mission", content: mission },
            { title: "Main Challenge", content: mainChallenge },
            { title: "Objectives", content: objectives },
          ].map((item, index) => (
            <div key={index} className="challenge-card">
              <div>
                <div className="challenge-title">{item.title}</div>
                <div className="base-text">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div id="process" className="section">
        <div className="case-study-label">METHODOLOGY</div>
        <div className="section-title">Development Process</div>

        <Process />
        <div className="section-content">{overview}</div>

        <div className="flex items-center gap-4 flex-wrap mb-4">
          {currentProject?.iconLists.map((icon, index) => {
            const techName = technologyStack[index];

            return (
              <div
                key={icon}
                className="group relative border border-white/[0.2] rounded-full bg-black w-16 h-16 flex justify-center items-center hover:scale-105 transition-transform"
              >
                <Image
                  src={icon}
                  alt={techName}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-gradient-to-r from-slate-900 to-slate-950 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-500/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {techName}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Highlights */}
      <div id="features" className="section">
        <div className="case-study-label">FEATURES</div>
        <div className="section-title">Key Highlights</div>
        <div className="card-grid">
          {keyHighlights.map((highlight: any, i: number) => (
            <div key={i} className="challenge-card">
              <div className="challenge-title">{highlight.title}</div>
              <div className="base-text">{highlight.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Website Preview */}
      {project !== "appraisal" && project !== "inspector" && (
        <div id="preview" className="w-full flex justify-center">
          <div className="w-full max-w-[1300px] mt-8 mb-8">
            <WebpageScroll project={project} />
          </div>
        </div>
      )}

      {/* Challenges & Solutions */}
      <div id="challenges" className="section">
        <div className="case-study-label">PROBLEM SOLVING</div>
        <div className="section-title">Challenges & Solutions</div>
        <div className="card-grid">
          {challengesAndSolutions.map((item: any, i: number) => (
            <div key={i} className="challenge-card">
              <div>
                <div className="challenge-title">Challenge</div>
                <div className="base-text">{item.challenge}</div>
              </div>
              <div>
                <div className="challenge-title">Solution</div>
                <div className="base-text">{item.solution}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div id="results" className="section">
        <div className="case-study-label">OUTCOMES</div>
        <div className="section-title">Result</div>
        <div className="section-content">{outcomeSummary}</div>

        <div className="section-title mt-8">Key Metrics</div>
        <Metrics
          keyMetrics={{
            lighthousePerformance,
            accessibility,
            bestPractices,
            seo,
          }}
        />
      </div>

      {/* Conclusion */}
      <div id="conclusion" className="section">
        <div className="case-study-label">FINAL THOUGHTS</div>
        <div className="section-title">Conclusion</div>
        <div className="section-content">{conclusion}</div>
      </div>

      {/* Future Enhancements */}
      <div id="future" className="section">
        <div className="case-study-label">NEXT STEPS</div>
        <div className="section-title">Future Enhancements</div>
        <div className="section-content">
          <div className="grid grid-cols-1 gap-4">
            {futureEnhancements.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <span className="case-study-highlight text-2xl">•</span>
                <span className="base-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCase;
