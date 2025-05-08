"use client";
import React, { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

const TableOfContents = ({ sections }: { sections: Section[] }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showToc, setShowToc] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const summarySection = document.getElementById("summary");
      if (summarySection) {
        const summaryRect = summarySection.getBoundingClientRect();
        setShowToc(summaryRect.top <= 0);
      }

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          return rect.top <= viewportHeight * 0.3 && rect.bottom >= 0;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 600,
        behavior: "smooth",
      });
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Hamburger icon for mobile */}
      {showToc && (
        <button
          className="hamburger-icon"
          onClick={toggleSidebar}
          aria-label="Toggle table of contents"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      )}

      {/* Table of Contents - desktop version */}
      <div
        className={`table-of-contents desktop-toc ${showToc ? "toc-visible" : "toc-hidden"}`}
      >
        <ul className="toc-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`toc-item ${activeSection === section.id ? "active" : ""}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar - mobile version */}
      <div
        className={`sidebar-toc ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        <div className="sidebar-header">
          <button
            className="close-sidebar"
            onClick={toggleSidebar}
            aria-label="Close table of contents"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="toc-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`toc-item ${activeSection === section.id ? "active" : ""}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default TableOfContents;
