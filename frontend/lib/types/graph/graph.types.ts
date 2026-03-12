// export interface NodeDocument {
//     id: string,
//     label: string,
//     type: "DOCUMENT",
// }
// export interface NodeConcept {
//     id: string,
//     label: string,
//     type: "CONCEPT",
//     fill: "#FFC861",
// }

// export interface EdgeLink {
//     id: string,
//     source: string,
//     target: string,
//     label: "LINKS_TO",
// }
// export interface EdgeMention {
//     id: string,
//     source: string,
//     target: string,
//     label: "MENTIONS",
//     dashed: true,
//     fill: "#949494",
// }

export interface NodeDocument {
  id: string;
  label: string;
  type: "DOCUMENT";
  fill?: string;
}

export interface NodeConcept {
  id: string;
  label: string;
  type: "CONCEPT";
  fill?: string;
}

export interface EdgeLink {
  id: string;
  source: string;
  target: string;
  label: "LINKS_TO";
  fill?: string;
  dashed?: boolean;
}

export interface EdgeMention {
  id: string;
  source: string;
  target: string;
  label: "MENTIONS";
  fill?: string;
  dashed?: boolean;
}

export type GraphNode = NodeDocument | NodeConcept;
export type GraphEdge = EdgeLink | EdgeMention;

export interface TopicKnowledgeGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}
