// Render MkDocs Material superfences Mermaid blocks explicitly.
// Using mermaid.run() here can leave empty .mermaid containers when parsing
// fails during Material's instant-navigation lifecycle. Rendering each source
// independently preserves the original block if a diagram cannot be rendered.

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
  theme: "neutral"
});

let mermaidRenderCounter = 0;

document$.subscribe(async () => {
  if (typeof mermaid === "undefined") return;

  const blocks = [...document.querySelectorAll("pre.mermaid")];

  for (const block of blocks) {
    const source = block.textContent.trim();
    if (!source) continue;

    const renderId = `mermaid-diagram-${mermaidRenderCounter++}`;

    try {
      const { svg, bindFunctions } = await mermaid.render(renderId, source);
      const container = document.createElement("div");
      container.className = "mermaid";
      container.innerHTML = svg;
      block.replaceWith(container);
      if (typeof bindFunctions === "function") bindFunctions(container);
    } catch (error) {
      // Keep the source visible and available for diagnosis rather than
      // replacing it with an empty container.
      block.classList.add("mermaid-render-error");
      console.error("Mermaid rendering error:", error);
    }
  }
});
