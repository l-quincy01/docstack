import html2canvas from "html2canvas-pro";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export async function captureEditorThumbnailFromClone(
  sourceNode: HTMLElement
): Promise<Blob> {
  const clonedNode = sourceNode.cloneNode(true) as HTMLElement;

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-100000px";
  wrapper.style.top = "0";
  wrapper.style.width = `${A4_WIDTH}px`;
  wrapper.style.height = `${A4_HEIGHT}px`;
  wrapper.style.overflow = "hidden";
  wrapper.style.background = "#ffffff";
  wrapper.style.zIndex = "-1";
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.style.colorScheme = "light";
  wrapper.style.background = "#ffffff";
  wrapper.style.color = "#000000";

  clonedNode.style.width = `${A4_WIDTH}px`;
  clonedNode.style.minHeight = `${A4_HEIGHT}px`;
  clonedNode.style.height = `${A4_HEIGHT}px`;
  clonedNode.style.background = "#ffffff";
  clonedNode.style.color = "#000000";
  clonedNode.style.overflow = "hidden";
  clonedNode.style.boxShadow = "none";
  clonedNode.style.borderRadius = "0";

  clonedNode.classList.remove("dark");

  wrapper.appendChild(clonedNode);
  document.body.appendChild(wrapper);

  try {
    const all = wrapper.querySelectorAll("*");

    all.forEach((el) => {
      const htmlEl = el as HTMLElement;

      htmlEl.classList.remove("dark");

      if (htmlEl.dataset.excludeThumbnail === "true") {
        htmlEl.style.display = "none";
      }
    });

    //
    const canvas = await html2canvas(clonedNode, {
      backgroundColor: "#ffffff",
      useCORS: true,
      scale: 1,
    });

    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = A4_WIDTH;
    croppedCanvas.height = A4_HEIGHT;

    const ctx = croppedCanvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas context failed");
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, A4_WIDTH, A4_HEIGHT);

    ctx.drawImage(canvas, 0, 0, A4_WIDTH, A4_HEIGHT, 0, 0, A4_WIDTH, A4_HEIGHT);

    const blob = await new Promise<Blob | null>((resolve) =>
      croppedCanvas.toBlob(resolve, "image/png")
    );

    if (!blob) {
      throw new Error("Thumbnail blob failed");
    }

    return blob;
  } finally {
    document.body.removeChild(wrapper);
  }
}
