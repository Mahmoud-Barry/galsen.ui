"use client";

import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

type PageProps = {
  params: { componentName: string };
};

export default function Page({ params }: PageProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <main className="">
      <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
        <h1 className="text-2xl font-bold capitalize">
          {params.componentName}
        </h1>
        <p className="text-neutral-500">
          Les boutons sont des composants très utilisés au niveau des pages
          webs.
        </p>

        <div className="mt-16 space-y-4">
          <article className="grid grid-cols-[auto_auto] gap-y-4 justify-between items-center">
            <h2 className="text-neutral-700">Bouton simple</h2>
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

            <div className="col-span-full h-[486px]">
              {tab === "preview" ? <TabPreview /> : <TabCode />}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

const TabPreview = () => {
  return (
    <div id="tab-preview">
      <PanelGroup
        className="bg-neutral-300 rounded-lg !h-[486px] relative !overflow-visible"
        direction="horizontal"
      >
        {/* TODO: make this pane fill the empty widht left by the ResizeHandle */}
        <Panel defaultSize={100} minSize={35}>
          <div className="w-full h-full flex items-center justify-center bg-neutral-300">
            Preview
          </div>
        </Panel>
        <PanelResizeHandle className="w-2 h-16 rounded-full bg-neutral-400 translate-x-3 translate-y-[230px]" />
        <Panel className="bg-neutral-100 rounded-e-lg" defaultSize={0} />
      </PanelGroup>
    </div>
  );
};

const TabCode = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-300 rounded-lg">
      Code
    </div>
  );
};
