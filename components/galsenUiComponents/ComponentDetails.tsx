"use client";

import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

type ComponentDetailsProps = {
  title: string;
};

const ComponentDetails = ({ title }: ComponentDetailsProps) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <article className="grid grid-cols-[auto_auto] gap-y-4 justify-between items-center">
      <h2 className="text-neutral-700">{title}</h2>
      <div className="p-1 bg-neutral-100 rounded">
        <button
          onClick={() => setTab("preview")}
          type="button"
          className={`py-2 px-3 rounded ${tab === "preview" ? "bg-neutral-200" : "bg-transparent"}`}
        >
          Aperçu
        </button>
        <button
          onClick={() => setTab("code")}
          type="button"
          className={`py-2 px-3 rounded ${tab === "code" ? "bg-neutral-200" : "bg-transparent"}`}
        >
          Code
        </button>
      </div>

      {/* TODO: use aspect-ratio to center the handle */}
      <div className="col-span-full h-[486px]">
        {tab === "preview" ? <TabPreview /> : <TabCode />}
      </div>
    </article>
  );
};

const TabPreview = () => {
  return (
    <PanelGroup
      className="bg-neutral-300 rounded-lg relative !overflow-visible"
      direction="horizontal"
    >
      {/* TODO: make this pane fill the empty widht left by the ResizeHandle */}
      <Panel defaultSize={100} minSize={35}>
        <div className="w-full h-full flex items-center justify-center bg-neutral-300 rounded-lg">
          Preview
        </div>
      </Panel>
      {/* TODO: hide the handle on smaller screen */}
      <PanelResizeHandle className="w-2 h-16 rounded-full bg-neutral-400 translate-x-3 translate-y-[230px]" />
      <Panel className="bg-neutral-100 rounded-e-lg" defaultSize={0} />
    </PanelGroup>
  );
};

const TabCode = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-300 rounded-lg">
      Code
    </div>
  );
};

export default ComponentDetails;
