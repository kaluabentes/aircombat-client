export default function createNameText(scene, x, y, text, size) {
  return scene.add
    .text(x, y, text, {
      fontFamily: "monospace",
      fontSize: size,
      fontStyle: "bold",
      color: "#fff",
      stroke: "#000",
      strokeThickness: 8,
    })
    .setOrigin(0.5, 0.5);
}
