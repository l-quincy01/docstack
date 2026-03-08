// "use client";

// import { Plate, usePlateEditor } from "platejs/react";
// import { Editor, EditorContainer } from "@/components/ui/editor";

// import { normalizeNodeId, Value } from "platejs";
// import { EditorKitThumbnail } from "./editor-kit-thumbnail";

// const EMPTY_VALUE: Value = normalizeNodeId([
//   { type: "p", children: [{ text: "" }] },
// ]);

// export function StaticPlatePreview({ value }: { value: any }) {
//   const editor = usePlateEditor({
//     plugins: EditorKitThumbnail,
//     value: value ?? EMPTY_VALUE,
//     autoSelect: "end",
//   });

//   return (
//     <div className="pointer-events-none scrollbar-hide w-full h-full origin-top-left overflow-hidden">
//       <Plate editor={editor} readOnly>
//         <Editor
//           variant="demo"
//           className="w-full h-full scale-[0.33] overflow-hidden "
//         />
//       </Plate>
//     </div>
//   );
// }
"use client";

import { Plate, usePlateEditor } from "platejs/react";
import { Editor } from "@/components/ui/editor";
import { normalizeNodeId, Value } from "platejs";
import { EditorKitThumbnail } from "./editor-kit-thumbnail";

const EMPTY_VALUE: Value = normalizeNodeId([
  { type: "p", children: [{ text: "" }] },
]);

const SCALE = 0.25;

export function StaticPlatePreview({ value }: { value: any }) {
  const previewContent = value ? value : value.length < 1 ? EMPTY_VALUE : value;

  const editor = usePlateEditor({
    plugins: EditorKitThumbnail,
    value: previewContent,
  });

  return (
    <div className="w-full h-full overflow-hidden ">
      <div
        style={{
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          width: `${100 / SCALE}%`,
          height: `${100 / SCALE}%`,
        }}
        className="pointer-events-none"
      >
        <Plate editor={editor} readOnly>
          <Editor className="max-w-[900px] mx-auto overflow-hidden " />
        </Plate>
      </div>
    </div>
  );
}
