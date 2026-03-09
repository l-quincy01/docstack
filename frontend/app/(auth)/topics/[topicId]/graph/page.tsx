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
  useSelection,
} from "reagraph";
const GraphCanvas = dynamic(
  () => import("reagraph").then((mod) => mod.GraphCanvas),
  { ssr: false }
);
const complexNodes = [
  { id: "topic-math", label: "Mathematics" },
  { id: "topic-cs", label: "Computer Science" },
  { id: "doc-linalg", label: "Linear Algebra Notes" },
  { id: "doc-calculus", label: "Calculus Summary" },
  { id: "doc-dsa", label: "DSA Cheatsheet" },
  { id: "doc-ml", label: "ML Fundamentals" },
  { id: "doc-db", label: "Database Systems" },
  { id: "concept-vectors", label: "Vectors" },
  { id: "concept-matrices", label: "Matrices" },
  { id: "concept-derivatives", label: "Derivatives" },
  { id: "concept-recursion", label: "Recursion" },
  { id: "concept-trees", label: "Trees" },
  { id: "concept-regression", label: "Regression" },
  { id: "concept-normalization", label: "Normalization" },
];
const complexEdges = [
  {
    id: "topic-math->doc-linalg",
    source: "topic-math",
    target: "doc-linalg",
    label: "contains",
  },
  {
    id: "topic-math->doc-calculus",
    source: "topic-math",
    target: "doc-calculus",
    label: "contains",
  },
  {
    id: "topic-cs->doc-dsa",
    source: "topic-cs",
    target: "doc-dsa",
    label: "contains",
  },
  {
    id: "topic-cs->doc-ml",
    source: "topic-cs",
    target: "doc-ml",
    label: "contains",
  },
  {
    id: "topic-cs->doc-db",
    source: "topic-cs",
    target: "doc-db",
    label: "contains",
  },
  {
    id: "doc-linalg->concept-vectors",
    source: "doc-linalg",
    target: "concept-vectors",
    label: "covers",
  },
  {
    id: "doc-linalg->concept-matrices",
    source: "doc-linalg",
    target: "concept-matrices",
    label: "covers",
  },
  {
    id: "doc-calculus->concept-derivatives",
    source: "doc-calculus",
    target: "concept-derivatives",
    label: "covers",
  },
  {
    id: "doc-dsa->concept-recursion",
    source: "doc-dsa",
    target: "concept-recursion",
    label: "covers",
  },
  {
    id: "doc-dsa->concept-trees",
    source: "doc-dsa",
    target: "concept-trees",
    label: "covers",
  },
  {
    id: "doc-ml->concept-regression",
    source: "doc-ml",
    target: "concept-regression",
    label: "covers",
  },
  {
    id: "doc-db->concept-normalization",
    source: "doc-db",
    target: "concept-normalization",
    label: "covers",
  },
  {
    id: "concept-vectors->concept-matrices",
    source: "concept-vectors",
    target: "concept-matrices",
    label: "related",
  },
  {
    id: "concept-recursion->concept-trees",
    source: "concept-recursion",
    target: "concept-trees",
    label: "used in",
  },
  {
    id: "doc-ml->doc-linalg",
    source: "doc-ml",
    target: "doc-linalg",
    label: "depends on",
  },
  {
    id: "doc-ml->doc-db",
    source: "doc-ml",
    target: "doc-db",
    label: "references",
  },
];
export default function Page() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const graphRef = useRef<GraphCanvasRef | null>(null);

  const graphTheme = useMemo(() => {
    if (resolvedTheme === "dark") {
      return {
        ...darkTheme,
        canvas: {
          ...darkTheme.canvas,
          background: "#0a0a0a",
        },
      };
    }

    return lightTheme;
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
    <div className="h-screen w-full relative">
      <GraphCanvas
        // cameraMode="rotate"
        // edgeArrowPosition="none"
        // labelType="none"
        layoutType="forceatlas2"
        defaultNodeSize={10}
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
        renderNode={({ node, size, color, opacity }) => (
          <group>
            <mesh>
              <sphereGeometry args={[size, 24, 24]} />
              <meshStandardMaterial
                color={color}
                transparent
                opacity={opacity}
              />
            </mesh>
          </group>
        )}
        // contextMenu={({ data, onClose }) => (
        //   <div>
        //     <h1>{data.label}</h1>
        //     <button onClick={onClose}>Close Menu</button>
        //   </div>
        // )}
      />
    </div>
  );
}
