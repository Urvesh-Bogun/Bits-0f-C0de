export async function getHeadings(source) {
  const lines = source.split("\n").filter(line => /^#{2,3}\s/.test(line));

  return lines.map((line, index) => {
    // Extract custom ID if it exists
    const idMatch = line.match(/\{#([^\}]+)\}/);
    const customId = idMatch ? idMatch[1] : null;

    // Get the plain heading text (remove ##, ###, and {#...})
    const text = line
      .replace(/^#{2,3}\s/, "")        // remove ## or ###
      .replace(/\s*\{#.*\}/, "")       // remove {#...}
      .trim();

    // If no custom ID, generate one from the text
    const id = customId || text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

    const level = line.startsWith("###") ? 3 : 2;

    return {
      text,
      level,
      id,
      uid: 1000 + index,
    };
  });
}