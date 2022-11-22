export function getColor(
  backgroundColor: "red" | "green" | "yellow" | undefined
) {
  if (backgroundColor === "green") return "#8ed794";
  if (backgroundColor === "yellow") return "#f1f17b";
  return "#f14f53";
}
