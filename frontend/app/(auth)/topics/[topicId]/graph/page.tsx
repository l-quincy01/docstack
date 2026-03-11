"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useRef } from "react";
import { Text } from "@react-three/drei";
import {
  darkTheme,
  GraphCanvasRef,
  lightTheme,
  recommendLayout,
  Theme,
  useSelection,
} from "reagraph";
const GraphCanvas = dynamic(
  () => import("reagraph").then((mod) => mod.GraphCanvas),
  { ssr: false }
);
const complexNodes = [
  {
    id: "topic-math",
    label: "Mathematics",
    type: "DOCUMENT",
  },
  {
    id: "topic-cs",
    label: "Computer Science",
    type: "DOCUMENT",
  },
  {
    id: "doc-linalg",
    label: "Linear Algebra Notes",
    type: "DOCUMENT",
  },
  {
    id: "doc-calculus",
    label: "Calculus Summary",
    type: "DOCUMENT",
  },
  {
    id: "doc-dsa",
    label: "DSA Cheatsheet",
    type: "DOCUMENT",
  },
  {
    id: "doc-ml",
    label: "ML Fundamentals",
    type: "DOCUMENT",
  },
  {
    id: "doc-db",
    label: "Database Systems",
    type: "DOCUMENT",
  },
  {
    id: "concept-vectors",
    label: "Vectors",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-matrices",
    label: "Matrices",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-derivatives",
    label: "Derivatives",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-recursion",
    label: "Recursion",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-trees",
    label: "Trees",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-regression",
    label: "Regression",
    type: "CONCEPT",
    fill: "#ffc861",
  },
  {
    id: "concept-normalization",
    label: "Normalization",
    type: "CONCEPT",
    fill: "#ffc861",
  },
];

const complexEdges = [
  {
    id: "topic-math->doc-linalg",
    source: "topic-math",
    target: "doc-linalg",
    label: "links to",
  },
  {
    id: "topic-math->doc-calculus",
    source: "topic-math",
    target: "doc-calculus",
    label: "links to",
  },
  {
    id: "topic-cs->doc-dsa",
    source: "topic-cs",
    target: "doc-dsa",
    label: "links to",
  },
  {
    id: "topic-cs->doc-ml",
    source: "topic-cs",
    target: "doc-ml",
    label: "links to",
  },
  {
    id: "topic-cs->doc-db",
    source: "topic-cs",
    target: "doc-db",
    label: "links to",
  },
  {
    id: "doc-linalg->concept-vectors",
    source: "doc-linalg",
    target: "concept-vectors",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-linalg->concept-matrices",
    source: "doc-linalg",
    target: "concept-matrices",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-calculus->concept-derivatives",
    source: "doc-calculus",
    target: "concept-derivatives",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-dsa->concept-recursion",
    source: "doc-dsa",
    target: "concept-recursion",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-dsa->concept-trees",
    source: "doc-dsa",
    target: "concept-trees",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-ml->concept-regression",
    source: "doc-ml",
    target: "concept-regression",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "doc-db->concept-normalization",
    source: "doc-db",
    target: "concept-normalization",
    label: "mentions",
    dashed: true,
    fill: "#949494",
  },
  {
    id: "concept-vectors->concept-matrices",
    source: "concept-vectors",
    target: "concept-matrices",
    label: "links to",
  },
  {
    id: "concept-recursion->concept-trees",
    source: "concept-recursion",
    target: "concept-trees",
    label: "links to",
  },
  {
    id: "doc-ml->doc-linalg",
    source: "doc-ml",
    target: "doc-linalg",
    label: "links to",
  },
  {
    id: "doc-ml->doc-db",
    source: "doc-ml",
    target: "doc-db",
    label: "links to",
  },
];

export default function Page() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const graphRef = useRef<GraphCanvasRef | null>(null);

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
    nodes: complexNodes,
    edges: complexEdges,
    pathSelectionType: "out",
    pathHoverType: "out",
  });

  return (
    <>
      <div className="flex flex-row w-full justify-between px-4">
        <div className="text-2xl font-semibold ">
          {" "}
          {"{TopicName} "}Knowledege Network
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-1 items-center">
            Document
            <div className="h-2 w-2 rounded-full p-2 bg-[#525252] dark:bg-[#ebebeb]  " />
          </div>
          <div className="flex flex-row gap-1 items-center">
            Concept
            <div className="h-2 w-2 rounded-full p-2 bg-[#ffc861] " />
          </div>

          <div className="flex flex-row gap-1 items-center">
            Mentions
            <div className=" w-4  border-dashed border-2 border-[#525252] dark:border-[#c7c9c9]" />
          </div>

          <div className="flex flex-row gap-1 items-center">
            Links
            <div className=" w-4   border-2 border-[#525252] dark:border-[#c7c9c9]" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full relative flex flex-col gap-2 ">
        <GraphCanvas
          cameraMode="rotate"
          maxDistance={20000}
          minDistance={3000}
          labelType="nodes"
          sizingType="centrality"
          draggable
          layoutType="forceatlas2"
          ref={graphRef}
          minNodeSize={2}
          maxNodeSize={6}
          theme={graphTheme}
          nodes={complexNodes}
          edges={complexEdges}
          selections={selections}
          actives={actives}
          onCanvasClick={onCanvasClick}
          onNodeClick={onNodeClick}
          onNodePointerOver={onNodePointerOver}
          onNodePointerOut={onNodePointerOut}
          onNodeDoubleClick={() => {
            router.push(
              "/topics/69ac4b264c8810387698755d/69ad20b16447210fb069a62c"
            );
          }}
        />
      </div>
    </>
  );
}
