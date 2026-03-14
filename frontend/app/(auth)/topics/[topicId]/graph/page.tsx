"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useRef } from "react";
import {
  darkTheme,
  GraphCanvasRef,
  lightTheme,
  Theme,
  useSelection,
} from "reagraph";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useTopicGraphQuery } from "@/hooks/graph/useGraph";

const GraphCanvas = dynamic(
  () => import("reagraph").then((mod) => mod.GraphCanvas),
  { ssr: false }
);

export default function Page() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const graphRef = useRef<GraphCanvasRef | null>(null);

  const params = useParams<{ topicId?: string }>();
  const topicId = params.topicId;

  const { data: topics = [] } = useTopicsQuery();
  const topic = topics.find((topic) => topic.id === topicId);

  const { data: graphData, isLoading, isError } = useTopicGraphQuery(topicId!);

  const nodes = graphData?.nodes ?? [];
  const edges = graphData?.edges ?? [];

  const graphTheme: Theme = useMemo(() => {
    if (resolvedTheme === "dark") {
      return {
        ...darkTheme,
        node: {
          ...darkTheme.node,
          fill: "#ebebeb",
        },
        canvas: {
          ...darkTheme.canvas,
          background: "#0a0a0a",
        },
        edge: {
          ...darkTheme.edge,
          fill: "#c7c9c9",
        },
        arrow: {
          ...darkTheme.arrow,
          fill: "#c7c9c9",
        },
      };
    }

    return {
      ...lightTheme,
      node: {
        ...lightTheme.node,
        fill: "#525252",
      },
      edge: {
        ...lightTheme.edge,
        fill: "#0a0a0a",
      },
      arrow: {
        ...lightTheme.arrow,
        fill: "#0a0a0a",
      },
    };
  }, [resolvedTheme]);

  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick,
    onNodePointerOver,
    onNodePointerOut,
  } = useSelection({
    ref: graphRef,
    nodes,
    edges,
    pathSelectionType: "out",
    pathHoverType: "out",
  });

  if (isLoading) {
    return <div className="p-4">Loading graph...</div>;
  }

  if (isError) {
    return <div className="p-4">Failed to load graph.</div>;
  }

  return (
    <>
      <div className="flex flex-row w-full justify-between px-4">
        <div className="text-2xl font-semibold ">
          {topic?.title} Knowledge Network
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-1 items-center">
            Document
            <div className="h-2 w-2 rounded-full p-2 bg-[#525252] dark:bg-[#ebebeb]" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            Concept
            <div className="h-2 w-2 rounded-full p-2 bg-[#ffc861]" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            Mentions
            <div className="w-4 border-dashed border-2 border-[#525252] dark:border-[#c7c9c9]" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            Links
            <div className="w-4 border-2 border-[#525252] dark:border-[#7f11e0]" />
          </div>
        </div>
      </div>

      <div className="h-screen w-full relative flex flex-col gap-2">
        <GraphCanvas
          cameraMode="rotate"
          maxDistance={20000}
          minDistance={2000}
          labelType="nodes"
          sizingType="centrality"
          draggable
          layoutType="forceatlas2"
          ref={graphRef}
          minNodeSize={2}
          maxNodeSize={6}
          theme={graphTheme}
          nodes={nodes}
          edges={edges}
          selections={selections}
          actives={actives}
          onCanvasClick={onCanvasClick}
          onNodeClick={onNodeClick}
          onNodePointerOver={onNodePointerOver}
          onNodePointerOut={onNodePointerOut}
          onNodeDoubleClick={(node) => {
            if (node.id.substring(0, 3) == "doc") {
              router.push(`/topics/${topicId}/${node.id.substring(4)}`);
            }
          }}
        />
      </div>
    </>
  );
}
