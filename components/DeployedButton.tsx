import React from "react";
import Link from "next/link";

const DeployedButton = ({
  project,
  link,
}: {
  project: string;
  link: string;
}) => {
  const tooltip = link
    ? link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";

  return (
    <div className="inline-flex justify-center items-center gap-7 mb-16">
      {project !== "appraisal" && project !== "inspector" && (
        <Link href={link} target="_blank" className="group relative">
          <div className="flex-1 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-950 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-500/40 flex justify-center items-center gap-2.5">
            <div className="justify-center text-white text-lg font-medium leading-snug">
              Deployed Link
            </div>
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 px-3 py-2 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {tooltip}
          </span>
        </Link>
      )}
      {/*<div className="flex-1 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-950 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-500/40 flex justify-center items-center gap-2.5">*/}
      {/*  <div className="w-4 h-4 relative overflow-hidden">*/}
      {/*    <div className="w-4 h-4 left-0 top-0 absolute bg-white"></div>*/}
      {/*  </div>*/}
      {/*  <div className="justify-center text-white text-lg font-medium leading-snug">*/}
      {/*    GitHub Repository*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
export default DeployedButton;
